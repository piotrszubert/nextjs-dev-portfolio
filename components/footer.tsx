import NavMenu from "./navMenu";

export default function Footer() {
  return (
    <footer className="border-t mt-6 py-10">
        <div className="flex flex-wrap gap-y-6 gap-x-3 justify-between">
            <div>
                <NavMenu
                    markActiveLink={false}
                />
            </div>
            <div className="text-muted-foreground">
                &copy; 2023 Portfolio.
                All rights reserved. 
            </div>
        </div>
    </footer>
  )
}