import axios from "./axios";

export async function getFriendsWannabes() {
    try {
        const { data } = await axios.get("/fetchall-friends-wannabes");
        return {
            type: "ALL_FRIENDS_WANNABES_ARRAY",
            allFriendsWannabes: data.allFriendsWannabes
        };
    } catch (e) {
        console.log("error mounting getFriendsWannabes action:", e);
    }
}

export async function acceptFriendReq(otherUserId) {
    try {
        const { data } = await axios.post("/accept-friend-req", {
            otherUserId: otherUserId
        });
        return {
            type: "ACCEPT_FRIEND_REQ",
            friendReqId: otherUserId
        };
    } catch (e) {
        console.log("error mounting acceptFriend action:", e);
    }
}

export async function unfriend(otherUserId) {
    try {
        const { data } = await axios.post("/unfriend", {
            otherUserId: otherUserId
        });
        return {
            type: "UNFRIEND",
            deleteId: otherUserId
        };
    } catch (e) {
        console.log("error mounting UNFRIEND action:", e);
    }
}

export async function ignore(otherUserId) {
    try {
        const { data } = await axios.post("/cancel-friend-req", {
            otherUserId: otherUserId
        });
        return {
            type: "IGNORE",
            ignoreId: otherUserId
        };
    } catch (e) {
        console.log("error mounting IGNORE action:", e);
    }
}

export async function addOnlineUsersToState(onlineUsers) {
    try {
        return {
            type: "ADD_ONLINE_USERS_TO_STATE",
            onlineUsers
        };
    } catch (e) {
        console.log("error mounting IGNORE action:", e);
    }
}
