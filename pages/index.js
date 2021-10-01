import Head from "next/head";
import Image from "next/image";
import Html from "next/document";
import styles from "../styles/Home.module.css";
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Card from './components/Card'
import Overview from './components/OverviewCard';
import OverviewCard from "./components/OverviewCard";

export default function Home() {
  const [enabled, setEnabled] = useState(false)


  return (
    <body>
      {/* container */}
      <div className="p-5">
        <h1 className="text-3xl font-bold pb-2">Social Media Dashboard</h1>
        <p className="text-gray pb-4">Total Followers: 23,004</p>
          <hr></hr>
        <div className="flex justify-between pt-5">
          <p>Dark Mode</p>
          <Switch checked={enabled} onChange={setEnabled}>
              <span className="block rounded-full shadow h-8 w-16 bg-gradient-to-l from-primary-test2 to-primary-test">
                <span
                  className={`block translate-x-5 bg-primary-Very-Light-Grayish-Blue shadow rounded-full h-full w-6/12 ${enabled ? "bg-red-500" : "bg-blue-500"}`}
                ></span>
              </span>
            </Switch>
        </div>
      </div>
      {/* top container ends */}
      <Card 
      media= {"facebook"}
      followers = {1987}
      username = {''}
      trend = {'up'}
      daily = {30}
      />
      <Card 
      media= {"twitter"}
      followers = {1987}
      username = {''}
      trend = {'up'}
      daily = {18}
      />
      <Card 
      media= {"ig"}
      followers = {1987}
      username = {''}
      trend = {'down'}
      daily = {45}
      />
      <Card 
      media= {"youtube"}
      followers = {1987}
      username = {''}
      trend = {'down'}
      daily = {144}
      />
       <OverviewCard
      media={"facebook"}
      title={'Page Views'}
      numbers={87}
      trend={'up'}
      percentage={3}
      />
       <OverviewCard
      media={"facebook"}
      title={'Likes'}
      numbers={52}
      trend={'down'}
      percentage={2}
      />
       <OverviewCard
      media={"ig"}
      title={'Likes'}
      numbers={5462}
      trend={'up'}
      percentage={2257}
      />
       <OverviewCard
      media={"ig"}
      title={'Page Views'}
      numbers={87}
      trend={'up'}
      percentage={23}
      />
       <OverviewCard
      media={"twitter"}
      title={'Retweets'}
      numbers={117}
      trend={'up'}
      percentage={303}
      />
       <OverviewCard
      media={"twitter"}
      title={'Likes'}
      numbers={507}
      trend={'up'}
      percentage={533}
      />
       <OverviewCard
      media={"youtube"}
      title={'Likes'}
      numbers={107}
      trend={'down'}
      percentage={19}
      />
       <OverviewCard
      media={"youtube"}
      title={'Total Views'}
      numbers={1407}
      trend={'down'}
      percentage={533}
      />
       
      
   
    </body>
  );
}
