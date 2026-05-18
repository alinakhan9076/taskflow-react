function SettingsPage(props) {
    return (
        <div>
        <h1 className="text-3xl font-bold mb-5">
            Settings Page</h1>

            <button 
            onClick={props.toggleDarkMode}
            className="border px-4 py-2 rounded">
                {
                    props.toggleDarkMode
                    ? "Disable Dark Mode"
                    : "Enable Dark Mode"
                }
            </button>
             
        </div>
    )
}

export default SettingsPage