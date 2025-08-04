export default function NavBar() {
  return (
    <nav className=" sticky top-0 z-50 flex justify-between  items-center  h-6 m-8 p-8 rounded-lg bg-linear-to-r from-primary from-0% to-secondary to-50%">
      <div>
        <h1 className="text-2xl font-medium text-white ">NEOLABEL</h1>
      </div>
      <div className=" flex text-base font-medium text-white gap-5 ">
        <h1>Features</h1>
        <h1>Pricing</h1>
        <h1>About Us</h1>
        <h1>Contact</h1>
      </div>
      <div className="flex text-base font-medium text-white gap-5 ">
        <h1>Sign Up</h1>
        <h1>Login</h1>
      </div>
    </nav>
  );
}
