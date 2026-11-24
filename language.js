(() => {
    const folders = { pt: "", en: "en/", ru: "ru/", ja: "ja/", zh: "zh/" };
    const requested = new URLSearchParams(location.search).get("lang");
    if (requested === "pt-BR") return;

    const preferences = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const language of preferences) {
        const base = language?.toLowerCase().split("-")[0];
        if (!Object.hasOwn(folders, base)) continue;
        if (folders[base]) location.replace(new URL(folders[base] + location.search + location.hash, location.href));
        return;
    }
})();
