const Rel = ({ children, tp }) => {
  return (
    <span className={`${tp ? "text-secondary/80 font-bold" : "text-secondary font-bold"}`}>
      {children}
    </span>
  )

}

export default Rel;