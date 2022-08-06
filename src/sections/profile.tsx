import type { Component } from 'solid-js';

const Profile: Component = () => {
    return (
        <div class="relative w-full bg-[#192734] pb-4 my-3 rounded-2xl">
            <div class="w-full h-[130px] rounded-2xl bg-gradient-to-b from-transparent from-pink-900 to-pink-500 border-solid border-2 border-pink-500">

            </div>
            <div class="absolute top-[20px] left-[15px] overflow-hidden bg-white w-[120px] h-[120px] rounded-full border-solid border-2 border-pink-500">
                <img src="/assets/profile.png" class="block w-full h-full object-cover object-center" />
            </div>
            <div class="px-4 pt-1">
                <h1 class="text-2xl font-bold">Zackary Santana</h1>
                <h2 class="text-lg font-medium text-[#b9cad3]">Software Engineer, Educator, Writer</h2>
                <div class="text-[#6a7c8b] text-sm leading-4 pl-3 relative leftline">
                    <p>Salesforce</p>
                    <p>Miami</p>
                    <p>Florida International University</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
