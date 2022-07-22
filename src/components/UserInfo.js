export default class UserInfo {
    constructor({profileNameSelector, profileProfessionSelector, profileAvatarSelector}) {
        this._name = document.querySelector(profileNameSelector);
        this._profession = document.querySelector(profileProfessionSelector);
        this._avatar = document.querySelector(profileAvatarSelector);
        this._id = '';
    }

    initialize({name, about, avatar, _id}) {
        this._name.textContent = name;
        this._profession.textContent = about;
        this._avatar.src = avatar;
        this._id = _id
    }

    updateAvatar(link) {
        this._avatar.src = link;
    }

    getUserId() {
        return this._id;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent
        }
    }

    setUserInfo({name, profession}) {
        this._name.textContent = name;
        this._profession.textContent = profession
    }
}