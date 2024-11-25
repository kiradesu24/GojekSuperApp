import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      abc
      <ComponentA />
    </div>
  )
}

function ComponentA() {
  return <div>component A</div>
}
  
