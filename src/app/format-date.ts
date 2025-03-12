export function formatDateToDisplay(date: Date) {
    return new Intl.DateTimeFormat("en-CA", {
        dateStyle: "long",
    }).format(date)
}