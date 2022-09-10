import * as React from "react";
import SettingLink from "./settings-screen/SettingLinks";
import SettingsHeader from "./settings-screen/SettingsHeader";
import Title from "./Title";

interface SettingScreenProps {}

const SettingScreen: React.FC<
  SettingScreenProps
> = ({}: SettingScreenProps) => {
  return (
    <div className='pb-28'>
      <Title>Settings</Title>
      <div className='mb-10'>
        <SettingsHeader name='Livingstone Christwealth' />
      </div>
      <div className='space-y-4'>
        <SettingLink
          text='Refer & Earn'
          subtext='Invite a friend and get a bonus'
        />
        <SettingLink
          text='Help center'
          subtext='Got any queries? send us a message now'
        />
        <SettingLink text='Update password' />
        <SettingLink text='Logout' />
      </div>
    </div>
  );
};

export default SettingScreen;
