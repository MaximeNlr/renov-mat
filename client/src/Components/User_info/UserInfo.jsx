import { useState } from "react"

export default function UserInfo({ user }) {

    const [userInfo, setUserInfo] = useState({
        firstname: "",
        lastname: "",
        adresse: "",
        gender: "",
        birthday: ""
    });

    return (
        <div className="lg:h-full">
            <form action="" className="h-full">
                <div className="flex h-full">
                    <div className="flex gap-10 w-1/2 ml-14">
                        <div className="profile-inputs flex flex-col lg:gap-6 justify-center text-base lg:text-lg">
                            <div className="profile-input-label-container">
                                <label className="font-medium" htmlFor="">Prénom</label>
                                <input className="pl-2" type="text" defaultValue={user.firstname} />
                            </div>
                            <div className="profile-input-label-container">
                                <label className="font-medium" htmlFor="">Nom</label>
                                <input className="pl-2" type="text" defaultValue={user.lastname} />
                            </div>
                            <div className="profile-input-label-container">
                                <label className="font-medium" htmlFor="">Mail</label>
                                <input className="bg-gray-300 text-gray-700 pl-2" type="text" readOnly defaultValue={user.email} />
                            </div>
                            <div className="profile-input-label-container">
                                <label className="font-medium" htmlFor="">Adresse</label>
                                <input className="pl-2" type="text" defaultValue={user.adress} />
                            </div>
                            <div className="profile-input-label-container">
                                <label className="font-medium" htmlFor="">Genre</label>
                                <input className="pl-2" type="text" readOnly defaultValue={user.gender} />
                            </div>
                            <div className="profile-input-label-container">
                                <label htmlFor="">Date de naissance</label>
                                <input className="pl-2" type="text" defaultValue={user.birthday} />
                            </div>
                        </div>
                    </div>
                    <div className="w-0.5 bg-[var(--green)]"></div>
                    <div className="w-1/2 flex flex-col gap-10 font-extrabold">
                        <div>
                            <h2 className="text-center text-[1.3rem]">MES UNIVERS PRÉFÉRÉS</h2>
                        </div>
                        <div className="flex flex-col h-full justify-around">
                            <div className="flex flex-wrap text-[0.9rem] font-bold gap-10 justify-center text-white">
                                <div className="profile-pref bg-[var(--green)]">
                                    <p>+</p>
                                </div>
                                <div className="profile-pref bg-[var(--green)]">
                                    <p>+</p>
                                </div>
                                <div className="profile-pref bg-[var(--green)]">
                                    <p>+</p>
                                </div>
                                <div className="profile-pref bg-[var(--green)] rounded-full w-">
                                    <p>+</p>
                                </div>
                                <div className="profile-pref bg-[var(--green)] rounded-full">
                                    <p>+</p>
                                </div>
                                <div className="profile-pref bg-[var(--green)] rounded-full">
                                    <p>+</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="flex border-2 border-[var(--green)] p-1 w-[30%] rounded-md justify-center gap-2 text-white bg-[var(--yellow)] cursor-pointer">
                                    <img src="../../Assets/save.svg" alt="" />
                                    <p>ENREGISTER</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}