import { Campaign } from "./types";

export function getCampaignFilepath(campaign: Campaign | string): string {
    switch (campaign) {
        case Campaign.GB, "Gangbangers":
            return "gb"
        case Campaign.BBFOTF, "Brave Best Friends of the Forest":
            return "bbfotf"
        default:
            return ""
    }
}
