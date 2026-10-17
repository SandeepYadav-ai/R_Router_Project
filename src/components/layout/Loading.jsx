export const Loading = ()=> {
    return(
        <div className="h-250 w-550 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-26 w-26 animate-spin rounded-full border-5 border-solid border-blue-600 border-r-transparent"></div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Loading content...
            </p>
          </div>
        </div>
    )
}