import { Menu } from "./Menu";
import { SubscriptionForm } from "./SubscriptionForm";
import styles from "./SubscriptionSection.module.scss"

export function SubscriptionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.section__content}>
      <Menu />
      <SubscriptionForm />
      </div>
    </section>
  )
}