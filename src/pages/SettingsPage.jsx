function SettingsPage(props) {
    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-cyan-700 mb-6">
            Settings</h1>

            <button 
            onClick={props.toggleDarkMode}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl">
                {
                    props.darkMode
                    ? "Disable Dark Mode"
                    : "Enable Dark Mode"
                }
            </button>
             
        </div>
    )
}

export default SettingsPage