export function PageTitle({ section, heading, children }) {
    return (
      <div className="mx-auto w-full px-4 text-center lg:w-6/12">
        <p className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">{section}</p>
        <h2 className="text-3xl font-bold text-gray-900 my-3">{heading}</h2>
        <p className="text-lg text-gray-500">{children}</p>
      </div>
    );
  }