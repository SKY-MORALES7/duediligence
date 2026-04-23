
import Link from 'next/link'


export default function Buypage(){

    return(
      <>
        <main className="relative min-h-screen w-full overflow-hidden">
      
      {/* 🔹 The Ken Burns Background Layer */}
      <div 
        className="absolute inset-0 z-0 animate-kenburns bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1620987278429-ab178d6eb547?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')" 
        }}
      />

  <div className=" relative z-10 pt-20 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-3xl md:text-6xl font-bold mb-5 sb:text-2xl bg-gradient-to-r from-slate-500 via-amber-950/80 to-slate-700 animate-gradient bg-clip-text text-transparent pb-3">
        Buy our products
      </h1>
      <p className="text-xl text-amber-950 font-bold">
       Get full-time access to our app with various accessible prices
      </p>
    </div>
    </main>

    <main className = "max-w-5xl mx-auto px-4 py-10">
<div className = "grid grid-cols-1 md:grid-cols-2 gap-16">
  <div className = "pr-10">
    <h1 className = "font-extrabold text-[25px] text-slate-700">Pay With Card or Bank Account</h1>
    <hr className="my-3 border-blue-400/90 max-w-xl mx-auto" />
    <p className = "text-sky-950">
      You will be required to provide your <b>Product Key</b>, <b>mobile number</b> and <b>email address</b>. You will find your Product Key after installing the application. After a successful payment, an <b>Activation Key</b> will be automatically sent to your mobile number and email address. Please check your <b>spam box</b> in case you could not find it in your <b>inbox.</b>
    </p>
      <Link href = "/payment_details">
  <button className='mt-4 text-white px-4 py-2 bg-emerald-500 hover:bg-emerald-800 rounded-sm transition-colors duration-500 ease-in-out'>Buy Now</button>
</Link>

  </div>
   <div className = "pr-10">
    <h1 className = "font-extrabold text-[25px] text-slate-700">Payment To Bank | Bank Transfer</h1>
    <hr className="my-3 border-blue-400/90 max-w-xl mx-auto" />
    <div className = "text-sky-950">
      <h1 className = "font-bold">Opay-bank</h1>
      <p className = "text-base mt-2">Account Name:</p>
      <p className = "text-base mt-2">Account Number:</p>
      <p className = "text-base mt-2">Account type:</p>
      <p className = "text-base mt-2">if you are buying less than 10 activation keys, after payment,
Send Text Message Containing:</p>

  <li className = "list-decimal mx-6 mt-2">Product Name</li>
  <li className = "list-decimal mx-6 mt-2">Product Key</li>
  <li className = "list-decimal mx-6 mt-2">Amount Paid</li>
  <li className = "list-decimal mx-6 mt-2">Bank Name (Opay)</li>
    <li className = "list-decimal mx-6 mt-2"> Depositor's Name or Payment Details</li>

    <p className="text-slate-800 mt-2">To:</p>
  <a href="tel:08113320219" className ="text-base font-bold hover:underline">
    0811 332 0219
  </a>

<div className = "text-base text-slate-900 ml-3">

 <p className = "text-sky-950 ">If on WhatsApp, send it to <b>+234 811 332 0219.</b> We respond faster on WhatsApp.
 </p>
 <p className = "mt-3 text-slate-800">
  For those buying 10 or more activation keys, kindly contact us on WhatsApp<b> (09037778195) </b>or call our customer care agents after payment.
</p>


  </div>


  
   
      
     
    </div>

  </div>
  </div>
  <div className = "">
    <h1 className = "text-sky-800 text-3xl mt-4 font-bold">Pricing:</h1>
        <hr className="mt-4 border-slate-950/90  mx-auto" />
          <div className = "grid grid-cols-1 gap-6  md:grid-cols-3 mt-7 place-items-center ">

           <div className="border border-slate-400 rounded-sm overflow-hidden w-64 hover:border-sky-600">
  <div className="bg-amber-400 px-6 py-2 border-b border-slate-700">
    <p className="font-bold text-slate-900 text-center">Premium Plan</p>
  </div>

  <div className="bg-slate-50 px-6 py-6">
     <p className="text-xl font-mono text-slate-700 text-center">NGN 500,000 </p>
  </div>
          </div>


           
           <div className="group border border-slate-400 rounded-sm overflow-hidden w-64 hover:border-sky-600">
  <div className=" bg-amber-400 px-6 py-2 border-b border-slate-700">
    <p className="font-bold text-slate-900 text-center group-hover:scale-110 transition-transform duration-300 delay-300 ">Standard Plan</p>
  </div>

  <div className="bg-slate-50 px-6 py-6">
     <p className="text-xl font-mono text-slate-700 text-center ">NGN 1,000,000 </p>
  </div>
          </div>


                  <div className="group border border-slate-400 rounded-sm overflow-hidden w-64 hover:border-sky-600">
  <div className="bg-amber-400 px-6 py-2 border-b border-slate-700">
    <p className="font-bold text-slate-900 text-center group-hover:scale-110 transition-transform duration-300 delay-300">Life-Time Plan</p>
  </div>

  <div className="bg-slate-50 px-6 py-6">
     <p className="text-xl font-mono text-slate-700 text-center">NGN 2,000,000 </p>
  </div>
          </div>
   

          </div>
    </div>
      </main>
      </>
    )
}