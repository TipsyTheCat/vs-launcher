import { TABLEBODY_VARIANTS, TABLEROW_VARIANTS } from "@renderer/utils/animateVariants"
import clsx from "clsx"
import { AnimatePresence, motion } from "motion/react"

/**
 * Table external wrapper.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - TableHead and TableRow.
 * @param {string} props.className - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function TableWrapper({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return (
    <div className={clsx("rounded-sm bg-zinc-950/50 border border-zinc-400/5 shadow-sm shadow-zinc-950/50 hover:shadow-none duration-200 overflow-hidden backdrop-blur-xs", className)}>{children}</div>
  )
}

/**
 * Table head. Fixed to top.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - TableHeadRow.
 * @param {string} props.className - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function TableHead({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return <ul className={clsx("sticky top-0 z-10 bg-zinc-950/50 flex flex-col pr-[10px]", className)}>{children}</ul>
}

/**
 * Table head row.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - One or more TableCell. Same cells as the body.
 * @param {string} props.className - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function TableHeadRow({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return <li className={clsx("flex border-l-4 border-transparent", className)}>{children}</li>
}

/**
 * Table body.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - One or more TableBodyRow.
 * @param {string} props.className - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function TableBody({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return (
    <motion.ul variants={TABLEBODY_VARIANTS} initial="initial" animate="animate" exit="exit" className={clsx("flex flex-col overflow-x-hidden overflow-y-scroll", className)}>
      <AnimatePresence>{children}</AnimatePresence>
    </motion.ul>
  )
}

/**
 * Table body row.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - One or more TableCell. Same cells as the head.
 * @param {string} props.className - Additional class names for styling.
 * @param {boolean} props.selected - If the row is selected or not.
 * @param {boolean} props.disabled - If the row can be selected or not.
 * @param {string} props.title - If the row can be selected or not.
 * @param {() => void} props.onClick - Function to be called when the row is clicked.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function TableBodyRow({
  children,
  className,
  selected,
  disabled,
  title,
  onClick
}: {
  children: React.ReactNode
  className?: string
  selected?: boolean
  disabled?: boolean
  title?: string
  onClick?: () => void
}): JSX.Element {
  return (
    <motion.li
      variants={TABLEROW_VARIANTS}
      className={clsx(
        "flex group border-l-4 border-transparent duration-200",
        selected ? "bg-vs/15 border-vs" : "odd:bg-zinc-800/30 even:bg-zinc-950/30",
        disabled ? "text-zinc-200/15" : onClick && "cursor-pointer",
        className
      )}
      title={title}
      onClick={onClick}
    >
      {children}
    </motion.li>
  )
}

/**
 * Table cell.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - Anything, but text is the ideal.
 * @param {string} props.className - Additional class names for styling.
 * @returns {JSX.Element} A JSX element wrapping the children with specified styles.
 */
export function TableCell({ children, className }: { children: React.ReactNode; className?: string }): JSX.Element {
  return <div className={clsx("shrink-0 p-1 overflow-hidden", className)}>{children}</div>
}
