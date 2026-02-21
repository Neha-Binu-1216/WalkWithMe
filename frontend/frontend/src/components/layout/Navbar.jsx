import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">SafeGuard</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as="a" color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}