import React from "react";

export default class EditorSettings {
    shouldShowAdvanced: boolean;
    setSettings: (settings: EditorSettings) => void;
}

export const EditorSettingsContext = React.createContext<EditorSettings>({shouldShowAdvanced: true, setSettings: () => {}})
