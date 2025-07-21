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
                <div className="flex flex-col gap-7 lg:flex-row h-full w-full">
                    <h1 className="lg:hidden text-center text-2xl font-bold">Informations Personnelles</h1>
                    <div className="flex gap-10 lg:w-1/2 lg:ml-14">
                        <div className="w-full flex flex-col gap-8 justify-center text-[17px] lg:text-lg">
                            <div className="flex flex-row items-center gap-4 w-full">
                                <label className="font-semibold w-20 lg:w-32 flex-shrink-0" htmlFor="">Prénom</label>
                                <input className="border-2 border-[var(--green)] rounded-lg pl-2 h-10 w-full lg:w-1/2" type="text" defaultValue={user.firstname} />
                            </div>
                            <div className="flex flex-row items-center gap-4 w-full">
                                <label className="font-semibold w-20 lg:w-32 flex-shrink-0" htmlFor="">Nom</label>
                                <input className="border-2 border-[var(--green)] rounded-lg pl-2 h-10 w-full lg:w-1/2" type="text" defaultValue={user.lastname} />
                            </div>
                            <div className="flex flex-row items-center gap-4 w-full">
                                <label className="font-semibold w-20 lg:w-32 flex-shrink-0" htmlFor="">Mail</label>
                                <input className="border-2 border-[var(--green)] rounded-lg pl-2 h-10 w-full lg:w-1/2" type="text" readOnly defaultValue={user.email} />
                            </div>
                            <div className="flex flex-row items-center gap-4 w-full">
                                <label className="font-semibold w-20 lg:w-32 flex-shrink-0" htmlFor="">Adresse</label>
                                <input className=" border-2 border-[var(--green)] rounded-lg pl-2 h-10 w-full lg:w-1/2" type="text" defaultValue={user.adress} />
                            </div>
                            <div className="flex flex-row items-center gap-4 w-full">
                                <label className="font-semibold w-20 lg:w-32 flex-shrink-0" htmlFor="">Genre</label>
                                <input className=" border-2 border-[var(--green)] rounded-lg pl-2 h-10 w-full lg:w-1/2" type="text" readOnly defaultValue={user.gender} />
                            </div>
                            <div className="flex flex-row items-center gap-4 w-full">
                                <label className="font-semibold w-20 lg:w-32 flex-shrink-0" htmlFor="">Date de naissance</label>
                                <input className=" border-2 border-[var(--green)] rounded-lg pl-2 h-10 w-full lg:w-1/2" type="text" defaultValue={user.birthday} />
                            </div>
                        </div>
                    </div>
                    <div className="w-0.5 bg-[var(--green)]"></div>
                    <div className="lg:w-1/2 flex flex-col gap-10 font-bold">
                        <div>
                            <h2 className="text-center text-2xl">Centre d’intérêt</h2>
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
                            <div className="flex justify-center lg:justify-end mt-10">
                                <button
                                    className="flex border-2 border-[var(--green)] p-1 w-full lg:w-[30%] rounded-md justify-center gap-2 text-white bg-[var(--yellow)] cursor-pointer">
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