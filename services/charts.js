import axios from "axios";
import ApiService from "@/services/api";

const ChartService = {
    async getCharts(type) {
        return await axios.get(ApiService.baseUrl() + '/charts', {
            params: {
                type: type
            }
        });
    },

    async voteChartSong(chart_id) {
        return await axios.get(ApiService.baseUrl() + '/charts', {
            params: {
                chart_id: chart_id
            }
        })
    },

    async getDailyCharts(date) {
        return await axios.get(ApiService.baseUrl() + '/daily', {
            params: {
                date: date
            }
        });
    },

    async getMonsterAllTime(date) {
        return await axios.get(ApiService.baseUrl() + '/allTime', {
            params: {
                date: date
            }
        });
    }
}

export default ChartService;
