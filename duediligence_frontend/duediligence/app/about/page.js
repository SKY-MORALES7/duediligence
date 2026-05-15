import ParticlesBackground from '../components/ParticlesBackground';


export default function Aboutpage(){
    return(

       <section className="relative overflow-hidden z-10 max-w-6xl mx-auto px-4 py-20 mb-7 ">
        <ParticlesBackground/>

  <div className="text-center mb-16">
    <h1 className="text-5xl font-bold text-slate-900 mb-4">Empowering education through Duediligence</h1>
    <p className="text-slate-600 max-w-2xl mx-auto font-bold">The all-in-one ecosystem designed to simplify school administration and let educators focus on what matters most: teaching. </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="group border border-slate-600 p-8 rounded-sm transition-all hover:border-amber-600 hover:shadow-lg">
      <div className="w-12 h-12 bg-amber-400 mb-6 transition-transform group-hover:rotate-12"></div>
      <h3 className="text-xl font-bold mb-2">Administrators</h3>
      <p className="text-slate-500 text-sm">Complete oversight of school operations, from enrollment to financial reporting.Possess access to school records from classes, subjects to graduated/promoted students</p>
    </div>

    <div className="group border border-slate-600 p-8 rounded-sm transition-all hover:border-blue-400 hover:shadow-lg">
      <div className="w-12 h-12 bg-blue-400 mb-6 transition-transform group-hover:rotate-12"></div>
      <h3 className="text-xl font-bold mb-2">Teachers</h3>
      <p className="text-slate-500 text-sm">Automated grading and exam management tools to reclaim hours of your day. Making work less tedious and focusing more on explanations for student understanding</p>
    </div>

    <div className="group border border-slate-600 p-8 rounded-sm transition-all hover:border-red-400 hover:shadow-lg">
      <div className="w-12 h-12 bg-red-400 mb-6 transition-transform group-hover:rotate-12"></div>
      <h3 className="text-xl font-bold mb-2">Students</h3>
      <p className="text-slate-500 text-sm">A personal dashboard to track grades, view schedules, and submit assignments.</p>
    </div>

  </div>
</section>





   

    )
}