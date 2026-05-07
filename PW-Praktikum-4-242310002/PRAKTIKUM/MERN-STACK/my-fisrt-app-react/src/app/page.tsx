"use client"; // This is required because we are using useState and useEffect

import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [info, setInfo] = useState<any>(null);

  const GetAPIInfo = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/info");
      setInfo(response.data);
    } catch (error: any) {
      console.error('Error fetching API data:', error);
      setInfo(error?.message);
    }
  };

  useEffect(() => {
    GetAPIInfo();
  }, []);

  return (
    <div className={styles.page}> {/* You can use your imported styles here */}
      <h1>Hello World!!</h1>
      
      {info && (
        <pre style={{
          backgroundColor: "#000000",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #020202",
          overflow: "auto",
          marginTop: "20px"
        }}>
          {JSON.stringify(info, null, 2)}
        </pre>
      )}
    </div>
  );
}