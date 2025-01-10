import React from "react";
import styles from "./Address.module.css";
import Image from "next/image";

const Address = () => {
  const addrSpanList = [
    {
      id: 1,
      label: "Address",
      address: ` N0-317, VPM Plaza, 2nd floor, 80ft road, \n
                Anna Nagar, Madurai, Tamil Nadu.`,
    },
    {
      id: 2,
      label: "Landmark",
      address: "Near HDFC Bank",
    },
    {
      id: 3,
      label: "Pincode",
      address: "625020, Tamil Nadu",
    },
    {
      id: 4,
      label: "Mobile",
      address: "+91 9384374741\n+91 9994058803",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.addrContainer}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src="/assets/addressImg.png"
              alt="Pick my university"
              fill
            />
          </div>
        </div>
        <div className={styles.right}>
          <h5 className={styles.heading}>Head Office</h5>
          <div className={styles.addrBox}>
            {addrSpanList.map((item) => (
              <span key={item.id} className={styles.addrSpan}>
                <p className={styles.label}>{item.label}</p>
                <p>:</p>

                {item.address.split("\n").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
