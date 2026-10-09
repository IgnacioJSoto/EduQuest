
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900">
      <div className="mx-auto max-w-md">
        <header className="mb-10">
          <p className="text-sm font-medium text-indigo-600">
            EduQuest
          </p>
          <h1 className="mt-3 text-3xl font-bold">
            ¡Bienvenido!
          </h1>
          <p className="mt-2 text-slate-600">
            Aprende, participa y alcanza tus metas.
          </p>
        </header>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Tu espacio de aprendizaje
          </p>

          <h2 className="mt-3 text-xl font-semibold">
            Comienza tu experiencia
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Realiza actividades, acumula puntos
            y descubre tus recompensas.
          </p>

          <button
            type="button"
            disabled
            className="mt-6 w-full rounded-xl bg-indigo-500 px-4 py-3 font-medium text-white opacity-60"
          >
            Próximamente
          </button>
        </section>

        <footer className="mt-8 text-center text-xs text-slate-400">
          EduQuest · Versión de desarrollo
        </footer>
      </div>
    </main>
  );
}