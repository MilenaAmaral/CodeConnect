import styles from './Checkbox.module.css'

function Checkbox({ id, label, ...props }) {
  return (
    <div className={styles.wrapper}>
      <input id={id} type="checkbox" className={styles.checkbox} {...props} />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
