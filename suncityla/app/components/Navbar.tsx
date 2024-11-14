import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex flex-row justify-between items-center mx-9 py-9">
            <div>
                <Link href="/" className="text-4xl font-semibold">SunCityLA</Link>
            </div>
            <div className="flex flex-row justify-end gap-6 font-semibold">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/bookings">Schedule an Evaluation</Link>
                <Link href="/admins">Admin Login</Link>
                <Link href="/Support">Support</Link>
            </div>
        </nav>
    )
}