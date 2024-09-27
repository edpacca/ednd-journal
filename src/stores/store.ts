import { writable, type Writable } from "svelte/store";
import { Campaign, UserType } from "../lib/types";

const defaultState = {
    userType: UserType.PLAYER,
    campaign: Campaign.GB
}

export const userType: Writable<UserType | undefined> = writable(defaultState.userType);
export const currentCampaign: Writable<string> = writable(defaultState.campaign);