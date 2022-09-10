import ChartService from "@/services/charts";

export const state = () => ({
    sessionID: null,
    voteCounter: 0,
    votingDate: null,
    user: process.client ? JSON.parse(localStorage.getItem("user")) : { sessionID: null, voteCounter: 0 },
});

export const mutations = {
    setSession(state, payload) {
        state.sessionID = payload.sessionID;
        state.voteCounter = payload.votes;
    },

    setUserSession(state, payload) {
        state.user = payload;
    },

    setLockVoting(state, payload) {
        state.sessionID = payload.sessionID;
        state.voteCounter = payload.votes;
        state.votingDate = payload.date;
    },

    decreaseVotesRemaining(state) {
        state.voteCounter -= 1;
    }
};

export const actions = {
    // context has { store, getters, dispatch, commit, rootState, rootGetters }
    createUserSession(context, _session) {
        const session = {
            sessionID: _session.id,
            votes: _session.votes
        };

        // store user session in localStorage in client side.
        if (process.client) {
            localStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(session));
        }

        context.commit("setSession", session);
        context.commit("setUserSession", session);

        return {
            type: 'success',
            code: 'CR_SUCCESS'
        }
    },

    async verifyUserSession(context) {
        if (process.client) {
            let date = new Date();
            const user = JSON.parse(localStorage.getItem("user"));

            // if the user does not exist return error.
            if (!user) {
                return {
                    responseType: 'error',
                    Code: 'SID_NOT_EXIST',
                };
            }

            // Restore user session, verify how many votes left
            if (user.sessionID) {
                // Restore session
                context.commit("setSession", user);
                context.commit("setUserSession", user);

                if (user.date !== date.getDate() && user.votes < 1) {
                    return {
                        responseType: 'error',
                        Code: 'VOTED_TODAY'
                    }
                } else if (user.date === date.getDate()) {
                    // Reset votes, and recreate user session id.
                    const response = await ChartService.getCharts();

                    const { session_id } = response.data;

                    const newSession = {
                        sessionID: session_id,
                        votes: 3
                    }

                    await context.dispatch("createUserSession", newSession);

                    return {
                        responseType: 'success',
                        Code: 'NEW_SID_CREATED'
                    }
                }

                return {
                    responseType: 'success',
                    Code: 'SID_RESTORED'
                };
            } else {
                return {
                    responseType: 'error',
                    Code: 'UNREACHABLE_ERROR'
                }
            }
        }
    },

    async voteChartedSong(context, _chartID) {
        try {
            if (process.client) {
                await ChartService.voteChartSong(_chartID);

                context.commit("decreaseVotesRemaining");

                const user = {
                    'sessionID': context.state.sessionID,
                    'votes': context.state.voteCounter
                };

                localStorage.removeItem("user");
                localStorage.setItem("user", JSON.stringify(user));

                context.commit("setSession", user);
                context.commit("setUserSession", user);

                return {
                    responseType: 'success',
                    code: 'VOTE_SUCCESS'
                }
            }
        } catch (error) {
            return error;
        }
    },

    async verifyRemainingVotes(context) {
        try {
            if (process.client) {
                // verify votes left in the session, if 0 lock session
                if (context.state.user.votes <= 0) {
                    let date = new Date;
                    let tomorrow = date.getDate() + 1;

                    const lockedUserSession = {
                        'sessionID': context.state.user.sessionID,
                        'votes': context.state.user.votes,
                        'date': tomorrow
                    };

                    context.commit("setLockVoting", lockedUserSession);
                    localStorage.setItem("user", JSON.stringify(lockedUserSession));

                    return {
                        responseType: 'success',
                        Code: 'VOTES_INSUFFICIENT'
                    }
                }

                return {
                    responseType: 'success',
                    Code: 'VOTES_SUFFICIENT'
                }
            }
        } catch (error) {
            return error;
        }
    }
}
