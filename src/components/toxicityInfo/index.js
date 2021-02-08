import React from "react"

import img4 from "../../images/nodes.webp"
import styles from "./toxicityInfo.module.css"

const ToxicityInfo = () => {
  return (
    <div className={styles.container}>
      <img src={img4} alt="Nodes" />
      <div className={styles.info}>
        <div className={styles.textBlock}>
          <h1>Have you noticed how toxic some social media has become?</h1>
        </div>
        <div className={styles.textBlock}>
          <p>
            Our Common Share™ Ethos will be derived from a mix of internet
            charters, as well as the Canadian Charter of Rights and Freedoms,
            the American Bill of Rights, and the Universal Declaration of Human
            Rights (UDHR). This will put the power of community control back
            into the systems we use daily. Whether it's creating, coding,
            writing, sharing, or remembering, OCS™ users will have a say in the
            creation and management of these ethos.
          </p>
        </div>
        <div className={styles.textBlock}>
          <p>
            Many people are not aware that hidden in complex legal agreements
            when signing up for social media, can give the platform legal
            ownership of what you posted! Maybe it’s pics of your childs
            Birthday, or a piece of music you composed that could be used in
            marketing or sold for use in publications.
          </p>
        </div>
        <div className={styles.textBlock}>
          <p>
            Imagine your photos, memories and life story are yours, the content
            you create will never be the property of OCS™, you will manage the
            rights to your personal information. A Creative Commons copyright
            assigned to every photo, song, piece of code, story, testimonial
            etc, should be yours to control and monetize should you feel like it
            via your settings dashboard. It’s time to take back control of your
            data, your creativity because that’s just simply what the ethos we
            are building for you here at Our Common Share™
          </p>
        </div>
      </div>
    </div>
  )
}

export default ToxicityInfo
