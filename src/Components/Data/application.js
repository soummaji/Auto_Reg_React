const application = [
    {
        Sourcing: [
            {
                id: 1,
                Name: "Astras",
                Desc: "Request for quotation",
                Access: "Green",
                Button: "Start",
            },

            {
                id: 2,
                Name: "BNC_Extended",
                Desc: "SharePoint cooperation platform by Brose Group",
                Access: "Red",
                Button: "NA"
            }
        ],
        Logistics: [
            {
                id: 3,
                Name: "Foreign Trade Zone",
                Desc: "Manual creation FTZ documents by service-provider",
                Access: "NA",
                Button: "Open",
                Enabled: true
            },
            {
                id: 4,
                Name: "Claim Processing 8D",
                Desc: "8D processing supplier",
                Access: "NA",
                Button: "NA",
                Enabled: false
            },
            {
                id: 5,
                Name: "BroCAR",
                Desc: "Exchange between Brose and its carriers of invoice information.",
                Access: "NA",
                Button: "NA",
                Enabled:false
            },
        ]
    }
]

export default application;