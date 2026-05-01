import Link from "next/link";

export default function Product(){
    return(
      
  <div 
    className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-green-300 bg-cover bg-center bg-no-repeat">
      <h1 className="text-6xl font-bold mb-8 text-amber-500">View our Product</h1>
      <Link href="/product" className="px-6 py-3 bg-indigo-950 text-white rounded hover:bg-indigo-600 transition">
        Products
      </Link>
    </div>

    )
}