import { NavMenu } from "./navMenu"

export const Footer = () => {
  return (
    <footer className="mt-16 border-t py-10">
      <div className="flex flex-wrap justify-between gap-x-3 gap-y-6">
        <div>
          <NavMenu markActiveLink={false} />
        </div>
        <div className="text-muted-foreground">&copy; ps777 2023</div>
      </div>
    </footer>
  )
}
