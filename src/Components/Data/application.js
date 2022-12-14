const application = [
    {
        Sourcing: [
            {
                id: 1,
                Name: "Astras",
                Desc: "Request for quotation",
                Access: "Green",
                Button: "Start",
                Enabled: true
            },

            {
                id: 2,
                Name: "BNC_Extended",
                Desc: "SharePoint cooperation platform by Brose Group",
                Access: "Red",
                Button: "NA",
                Enabled: true
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
            {
                id: 6,
                Name: "BroTAP",
                Desc: "Advice of transports to Brose plants.",
                Access: "NA",
                Button: "NA",
                Enabled:false
            },
            {
                id: 7,
                Name: "Supplier Workplace(SWP)",
                Desc: "Administration of shipping notifications to Brose plants.",
                Access: "NA",
                Button: "NA",
                Enabled:false
            },
            {
                id: 8,
                Name: "Brose Overseas-Process(OCC)",
                Desc: "Data maintenance by OCC.",
                Access: "NA",
                Button: "NA",
                Enabled:false
            },
        ],
        Quality: [
            {
                id: 1,
                Name: "Astras",
                Desc: "Request for quotation",
                Access: "Green",
                Button: "Start",
                Enabled: true
            },
            {
                id: 2,
                Name: "Sampling (PPA / PPAP)",
                Desc: "Production process and product approval",
                Access: "NA",
                Button: "NA",
                Enabled: false
            },
            {
                id:3,
                Name: "Supplier Number",
                Desc: "Supplier Number short description",
                Access: "NA",
                Button: "NA",
                Enabled: false
            },
            {
                id: 4,
                Name: "Feasibility Study (FS)",
                Desc: "Feasibility Study for supplier selection",
                Access: "Red",
                Button: "NA",
                Enabled: true
            },
            {
                id: 5,
                Name: "Claim Processing 8D",
                Desc: "8D processing supplier",
                Access: "NA",
                Button: "NA",
                Enabled: false
            },
            {
                id: 6,
                Name: "Deviation Request AWE",
                Desc: "Online Application Deviation Request",
                Access: "NA",
                Button: "NA",
                Enabled: false
            },
        ],
        Marketing: [
            {
                id: 1,
                Name: "Global Customs Service (GCS)",
                Desc: "Maintenance of customs data",
                Access: "Yellow",
                Button: "NA",
                Enabled: true
            },
            {
                id: 2,
                Name: "BCN",
                Desc: "Sharepoint cooperation platform by Brose group",
                Access: "NA",
                Button: "Open",
                Enabled: false
            },
        ],
        Collaboration: [
            {
                id: 1,
                Name: "BCN",
                Desc: "Sharepoint cooperation platform by Brose group",
                Access: "NA",
                Button: "Open",
                Enabled: true
            },
            {
                id: 2,
                Name: "BCN_Extended",
                Desc: "Sharepoint cooperation platform by Brose group",
                Access: "Red",
                Button: "NA",
                Enabled: true
            },
        ],
        Engineering: [
            {
                id: 1,
                Name: "ECM",
                Desc: "Engineering Change Management",
                Access: "NA",
                Button: "NA",
                Enabled: false
            },
        ],
        Supplier: [
            {
                id: 1,
                Name: "SAP Ariba SLP",
                Desc: "SAP Ariba module for supplier master data management (separate login) ",
                Access: "NA",
                Button: "Open",
                Enabled: false
            },
            {
                id: 2,
                Name: "BROFIS",
                Desc: "External portal for Brose standard and credit notes (separate login) ",
                Access: "NA",
                Button: "Open",
                Enabled: false
            },
        ],
        Purchasing: [
            {
                id: 1,
                Name: "Delivery Date Tracking (POST) ",
                Desc: "Request and confirmation of delivery date for purchase orders",
                Access: "NA",
                Button: "Open",
                Enabled: false
            },
        ],
    }
]

export default application;