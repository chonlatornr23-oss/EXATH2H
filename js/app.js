        // -------------------------------------------------------
        //  DATA
        // -------------------------------------------------------
        let apps = [{
            id: 1,
            name: 'EXAT SmartTax',
            protocol: 'API',
            status: 'Active',
            companies: ['EXAT HQ', 'EXAT Donmuang', 'EXAT Chalerm'],
            created: '01/01/2025 09:30',
            updated: '20/03/2026 10:59',
            url: 'https://api.exat.co.th/smarttax/v2',
            headers: [
                ['Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.EXAT2026'],
                ['X-Client-ID', 'EXAT-PROD-001'],
                ['Content-Type', 'application/json']
            ],
            tokens: [{
                host: '10.10.1.5',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.EXATSmartTax.xK9mP2qR7vL4nW',
                status: 'Active',
                created: '24/03/2026'
            }, {
                host: '10.10.1.6',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.EXATSmartTax.bN3hD8sT1cF6jY',
                status: 'Active',
                created: '15/02/2026'
            }, {
                host: '172.16.0.10',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.EXATSmartTax.zM5gQ4wE9pA2uI',
                status: 'Inactive',
                created: '01/01/2026'
            }, ]
        }, {
            id: 2,
            name: 'EXAT Branch Tax',
            protocol: 'Message Queue',
            status: 'Inactive',
            companies: ['EXAT M4', 'EXAT Pattaya'],
            created: '01/01/2025 09:30',
            updated: '20/02/2026 10:59',
            mqUrl: 'amqp://exat_branch:Exat@2026!@rabbitmq.exat.co.th:5672//etax_branch',
            tokens: []
        }, {
            id: 3,
            name: 'TISCO SmartTax',
            protocol: 'API',
            status: 'Active',
            companies: ['TISCO Bank'],
            created: '14/02/2025 10:40',
            updated: '01/01/2026 22:26',
            url: 'https://api.tisco.co.th/etax/v1',
            headers: [
                ['X-Api-Key', 'TISCO-PROD-KEY-7f3a9b2c'],
                ['Authorization', 'Bearer TISCOeyJhbGciOiJSUzI1NiJ9']
            ],
            tokens: [{
                host: '192.168.50.1',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.TISCO.kR7pL2mQ9vN4wX',
                status: 'Active',
                created: '10/03/2026'
            }, ]
        }, {
            id: 4,
            name: 'AOT SmartTax',
            protocol: 'API',
            status: 'Inactive',
            companies: ['AOT Suvarnabhumi'],
            created: '24/03/2025 08:30',
            updated: '24/03/2025 09:00',
            url: 'https://app.airportthai.co.th/etax',
            headers: [
                ['Authorization', 'Bearer eyJhebxmlAOT-2025'],
                ['X-Branch', 'SVB']
            ],
            tokens: []
        }, {
            id: 5,
            name: 'PTT e-Tax',
            protocol: 'API',
            status: 'Active',
            companies: ['PTT PLC', 'PTT Global Chemical'],
            created: '15/06/2025 08:00',
            updated: '28/03/2026 14:22',
            url: 'https://etax-api.ptt.co.th/submit',
            headers: [
                ['Authorization', 'Bearer PTTeyJhbGci-PROD'],
                ['X-Tax-Year', '2026']
            ],
            tokens: [{
                host: '10.20.5.3',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.PTTeTax.vH8nS3qM6bD1wK',
                status: 'Active',
                created: '01/03/2026'
            }, ]
        }, {
            id: 6,
            name: 'BBL Tax Connect',
            protocol: 'Message Queue',
            status: 'Active',
            companies: ['Bangkok Bank'],
            created: '20/08/2025 11:15',
            updated: '05/03/2026 09:45',
            mqUrl: 'amqp://bbl_etax:BBL@2026secure@mq.bangkokbank.co.th:5672//etax',
            tokens: []
        }, {
            id: 7,
            name: 'SCG SmartInvoice',
            protocol: 'API',
            status: 'Active',
            companies: ['SCB Securities', 'SCG Packaging'],
            created: '01/10/2025 07:30',
            updated: '22/03/2026 16:00',
            url: 'https://einvoice.scg.co.th/rd/api/v3',
            headers: [
                ['X-Company-Code', 'SCG-MAIN'],
                ['Authorization', 'Bearer SCGeyJhbGci2026'],
                ['Accept', 'application/xml']
            ],
            tokens: [{
                host: '10.30.1.100',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.SCGInvoice.pL4hT7nR2cW9mB',
                status: 'Active',
                created: '18/03/2026'
            }, {
                host: '10.30.1.101',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.SCGInvoice.xQ5kG8vD3sA6jN',
                status: 'Active',
                created: '18/03/2026'
            }, ]
        }, {
            id: 8,
            name: 'KBank e-Tax',
            protocol: 'API',
            status: 'Active',
            companies: ['Kasikorn Bank'],
            created: '05/02/2025 09:00',
            updated: '10/03/2026 08:30',
            url: 'https://etax-api.kasikornbank.com/v2/submit',
            headers: [['Authorization','Bearer KBankeyJhbGci-2026'],['X-Channel','H2H']],
            tokens: [{host:'172.20.1.10',token:'eyJhbGciOiJIUzI1NiJ9.KBank.aP3kR8mT5nQ2',status:'Active',created:'01/03/2026'}]
        }, {
            id: 9,
            name: 'EGAT e-Invoice',
            protocol: 'Message Queue',
            status: 'Active',
            companies: ['EGAT HQ','EGAT Mae Moh'],
            created: '10/03/2025 10:00',
            updated: '25/03/2026 11:00',
            mqUrl: 'amqp://egat_tax:Egat@2026!@mq.egat.co.th:5672//etax',
            tokens: []
        }, {
            id: 10,
            name: 'TRUE e-Tax',
            protocol: 'API',
            status: 'Active',
            companies: ['True Corporation'],
            created: '01/07/2025 08:00',
            updated: '20/03/2026 13:00',
            url: 'https://etax.true.th/rd/api/v1',
            headers: [['X-Api-Key','TRUE-H2H-KEY-2026'],['Authorization','Bearer TRUEeyJhbGci']],
            tokens: [{host:'10.50.2.5',token:'eyJhbGciOiJIUzI1NiJ9.TRUE.bX7nM4pQ9vR2',status:'Active',created:'15/02/2026'}]
        }, {
            id: 11,
            name: 'Krungsri Tax API',
            protocol: 'API',
            status: 'Inactive',
            companies: ['Bank of Ayudhya'],
            created: '15/09/2025 09:30',
            updated: '01/02/2026 10:00',
            url: 'https://api.krungsri.com/etax/submit',
            headers: [['Authorization','Bearer BAYeyJhbGci-2025']],
            tokens: []
        }, {
            id: 12,
            name: 'AIS e-Tax Connect',
            protocol: 'Message Queue',
            status: 'Active',
            companies: ['Advanced Info Service'],
            created: '01/11/2025 07:00',
            updated: '28/03/2026 09:00',
            mqUrl: 'amqp://ais_etax:AIS@2026!@rabbitmq.ais.th:5672//rd_etax',
            tokens: []
        }, {
            id: 13,
            name: 'Thai Union e-Tax',
            protocol: 'API',
            status: 'Active',
            companies: ['Thai Union Group'],
            created: '01/12/2025 08:30',
            updated: '22/03/2026 14:00',
            url: 'https://etax.thaiunion.com/api/rd/v2',
            headers: [['Authorization','Bearer TUGeyJhbGci-2026'],['Accept','application/xml']],
            tokens: [{host:'10.60.1.20',token:'eyJhbGciOiJIUzI1NiJ9.TUG.cN5gS3wD8kF7',status:'Active',created:'10/03/2026'}]
        }, {
            id: 14,
            name: 'Mitr Phol Tax',
            protocol: 'API',
            status: 'Inactive',
            companies: ['Mitr Phol Sugar'],
            created: '10/01/2026 09:00',
            updated: '10/01/2026 09:30',
            url: 'https://etax.mitrphol.com/rd/submit',
            headers: [['X-Client-ID','MITR-PROD-001']],
            tokens: []
        }, {
            id: 15,
            name: 'CP Group e-Tax',
            protocol: 'API',
            status: 'Active',
            companies: ['Charoen Pokphand Foods','CP All'],
            created: '01/02/2026 08:00',
            updated: '01/04/2026 10:00',
            url: 'https://etax-api.cpgroup.co.th/v3/rd',
            headers: [['Authorization','Bearer CPeyJhbGci-2026'],['X-Tax-Year','2026']],
            tokens: [{host:'10.70.5.1',token:'eyJhbGciOiJIUzI1NiJ9.CPGroup.dR8mL2nK6vT4',status:'Active',created:'01/04/2026'}]
        }, ];

        let companies = [{
            id: 1,
            name: 'EXAT HQ',
            taxId: '0994000165420',
            email: 'etax@exat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/exat/hq',
            app: 'EXAT SmartTax',
            status: 'Active',
            cpaRemaining: '275 days',
            created: '01/01/2025 09:35',
            updated: '20/03/2026 11:10'
        }, {
            id: 2,
            name: 'EXAT Donmuang',
            taxId: '0994000165421',
            email: 'etax.dm@exat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/exat/dm',
            app: 'EXAT SmartTax',
            status: 'Active',
            cpaRemaining: '275 days',
            created: '01/01/2025 09:35',
            updated: '01/01/2026 11:10'
        }, {
            id: 3,
            name: 'EXAT Chalerm',
            taxId: '0994000165423',
            email: 'etax.ck@exat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/exat/ck',
            app: 'EXAT SmartTax',
            status: 'Active',
            cpaRemaining: '120 days',
            created: '15/03/2025 10:00',
            updated: '20/03/2026 09:00'
        }, {
            id: 4,
            name: 'EXAT M4',
            taxId: '0994000165422',
            email: 'etax.m4@exat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/exat/m4',
            app: 'EXAT Branch Tax',
            status: 'Inactive',
            cpaRemaining: 'Expired',
            created: '01/01/2025 09:35',
            updated: '01/01/2025 11:10'
        }, {
            id: 5,
            name: 'EXAT Pattaya',
            taxId: '0994000165424',
            email: 'etax.ptt@exat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/exat/pattaya',
            app: 'EXAT Branch Tax',
            status: 'Active',
            cpaRemaining: '45 days',
            created: '01/06/2025 08:00',
            updated: '15/03/2026 10:00'
        }, {
            id: 6,
            name: 'TISCO Bank',
            taxId: '0107539000171',
            email: 'etax@tisco.co.th',
            rdUrl: 'https://rdservice.rd.go.th/tisco',
            app: 'TISCO SmartTax',
            status: 'Active',
            cpaRemaining: 'Expired',
            created: '14/02/2025 10:40',
            updated: '01/01/2026 22:26'
        }, {
            id: 7,
            name: 'AOT Suvarnabhumi',
            taxId: '0107545000292',
            email: 'etax@airportthai.co.th',
            rdUrl: 'https://rdservice.rd.go.th/aot/svb',
            app: 'AOT SmartTax',
            status: 'Inactive',
            cpaRemaining: 'Expired',
            created: '24/03/2025 08:30',
            updated: '24/03/2025 09:00'
        }, {
            id: 8,
            name: 'PTT PLC',
            taxId: '0100549000173',
            email: 'etax@ptt.co.th',
            rdUrl: 'https://rdservice.rd.go.th/ptt',
            app: 'PTT e-Tax',
            status: 'Active',
            cpaRemaining: '310 days',
            created: '15/06/2025 08:00',
            updated: '28/03/2026 14:22'
        }, {
            id: 9,
            name: 'PTT Global Chemical',
            taxId: '0107554000100',
            email: 'etax@pttgc.co.th',
            rdUrl: 'https://rdservice.rd.go.th/pttgc',
            app: 'PTT e-Tax',
            status: 'Active',
            cpaRemaining: '310 days',
            created: '15/06/2025 08:30',
            updated: '28/03/2026 14:22'
        }, {
            id: 10,
            name: 'Bangkok Bank',
            taxId: '0107536000197',
            email: 'etax@bangkokbank.co.th',
            rdUrl: 'https://rdservice.rd.go.th/bbl',
            app: 'BBL Tax Connect',
            status: 'Active',
            cpaRemaining: '190 days',
            created: '20/08/2025 11:15',
            updated: '05/03/2026 09:45'
        }, {
            id: 11,
            name: 'SCB Securities',
            taxId: '0107556000134',
            email: 'etax@scb.co.th',
            rdUrl: 'https://rdservice.rd.go.th/scb',
            app: 'SCG SmartInvoice',
            status: 'Active',
            cpaRemaining: '200 days',
            created: '01/10/2025 07:30',
            updated: '22/03/2026 16:00'
        }, {
            id: 12,
            name: 'SCG Packaging',
            taxId: '0107555000150',
            email: 'etax.pkg@scg.co.th',
            rdUrl: 'https://rdservice.rd.go.th/scgpkg',
            app: 'SCG SmartInvoice',
            status: 'Active',
            cpaRemaining: '200 days',
            created: '01/10/2025 07:45',
            updated: '22/03/2026 16:00'
        }, {
            id: 13,
            name: 'Banpu Power',
            taxId: '0107558000210',
            email: 'etax@banpu.co.th',
            rdUrl: '',
            app: 'Banpu e-Tax',
            status: 'Active',
            cpaRemaining: 'Pending',
            created: '10/01/2026 09:00',
            updated: '10/01/2026 09:00'
        }, {
            id: 14,
            name: 'IRPC PCL',
            taxId: '0107538000237',
            email: 'etax@irpc.co.th',
            rdUrl: '',
            app: 'IRPC e-Tax',
            status: 'Inactive',
            cpaRemaining: 'Pending',
            created: '20/02/2026 13:00',
            updated: '20/02/2026 13:00'
        }, {
            id: 16,
            name: 'Indorama Ventures',
            taxId: '0107556000298',
            email: 'etax@indorama.co.th',
            rdUrl: '',
            app: 'Indorama e-Invoice',
            status: 'Active',
            cpaRemaining: 'Pending',
            created: '05/03/2026 10:00',
            updated: '05/03/2026 10:00'
        }, {
            id: 17,
            name: 'Siam Cement',
            taxId: '0100539000152',
            email: 'etax@scg.co.th',
            rdUrl: '',
            app: 'SCG SmartInvoice',
            status: 'Active',
            cpaRemaining: 'Pending',
            created: '01/03/2026 08:00',
            updated: '01/03/2026 08:00'
        }, {
            id: 18,
            name: 'Univanich Palm Oil',
            taxId: '0107524000321',
            email: 'etax@univanich.co.th',
            rdUrl: '',
            app: 'Univanich e-Tax',
            status: 'Active',
            cpaRemaining: 'Pending',
            created: '25/03/2026 09:00',
            updated: '25/03/2026 09:00'
        }, {
            id: 19,
            name: 'Charoen Pokphand Foods',
            taxId: '0107536000109',
            email: 'etax@cpf.co.th',
            rdUrl: '',
            app: 'CP Group e-Tax',
            status: 'Active',
            cpaRemaining: 'Pending',
            created: '28/03/2026 13:00',
            updated: '28/03/2026 13:00'
        }, {
            id: 20,
            name: 'Kasikorn Bank',
            taxId: '0107537000521',
            email: 'etax@kasikornbank.com',
            rdUrl: 'https://rdservice.rd.go.th/kbank',
            app: 'KBank e-Tax',
            status: 'Active',
            cpaRemaining: '180 days',
            created: '05/02/2025 09:00',
            updated: '10/03/2026 08:30'
        }, {
            id: 21,
            name: 'EGAT HQ',
            taxId: '0994000158312',
            email: 'etax@egat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/egat',
            app: 'EGAT e-Invoice',
            status: 'Active',
            cpaRemaining: '220 days',
            created: '10/03/2025 10:00',
            updated: '25/03/2026 11:00'
        }, {
            id: 22,
            name: 'EGAT Mae Moh',
            taxId: '0994000158313',
            email: 'etax.maemoh@egat.co.th',
            rdUrl: 'https://rdservice.rd.go.th/egat/maemoh',
            app: 'EGAT e-Invoice',
            status: 'Active',
            cpaRemaining: '220 days',
            created: '10/03/2025 10:30',
            updated: '25/03/2026 11:00'
        }, {
            id: 23,
            name: 'True Corporation',
            taxId: '0107536001439',
            email: 'etax@true.th',
            rdUrl: 'https://rdservice.rd.go.th/true',
            app: 'TRUE e-Tax',
            status: 'Active',
            cpaRemaining: '90 days',
            created: '01/07/2025 08:00',
            updated: '20/03/2026 13:00'
        }, {
            id: 24,
            name: 'Bank of Ayudhya',
            taxId: '0107537000077',
            email: 'etax@krungsri.com',
            rdUrl: '',
            app: 'Krungsri Tax API',
            status: 'Inactive',
            cpaRemaining: 'Expired',
            created: '15/09/2025 09:30',
            updated: '01/02/2026 10:00'
        }, {
            id: 25,
            name: 'Advanced Info Service',
            taxId: '0107536001451',
            email: 'etax@ais.th',
            rdUrl: 'https://rdservice.rd.go.th/ais',
            app: 'AIS e-Tax Connect',
            status: 'Active',
            cpaRemaining: '150 days',
            created: '01/11/2025 07:00',
            updated: '28/03/2026 09:00'
        }, {
            id: 26,
            name: 'Thai Union Group',
            taxId: '0107554000206',
            email: 'etax@thaiunion.com',
            rdUrl: 'https://rdservice.rd.go.th/tug',
            app: 'Thai Union e-Tax',
            status: 'Active',
            cpaRemaining: '260 days',
            created: '01/12/2025 08:30',
            updated: '22/03/2026 14:00'
        }, {
            id: 27,
            name: 'Mitr Phol Sugar',
            taxId: '0107537000398',
            email: 'etax@mitrphol.com',
            rdUrl: '',
            app: 'Mitr Phol Tax',
            status: 'Inactive',
            cpaRemaining: 'Expired',
            created: '10/01/2026 09:00',
            updated: '10/01/2026 09:30'
        }, {
            id: 28,
            name: 'CP All',
            taxId: '0107537001509',
            email: 'etax@cpall.co.th',
            rdUrl: 'https://rdservice.rd.go.th/cpall',
            app: 'CP Group e-Tax',
            status: 'Active',
            cpaRemaining: 'Pending',
            created: '01/02/2026 08:00',
            updated: '01/04/2026 10:00'
        }, ];

        // wizardStep: 0=none, 1=RD appt done, 2=UAT registered, 3=XML testing, 4=PROD complete
        let cpas = [
            // -- Step 4 Complete: Active --
            {
                id: 1,
                cpaId: 'CPA-2025-001',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EXAT HQ',
                taxId: '0994000165420',
                app: 'EXAT SmartTax',
                provider: 'Host to Host',
                expire: '31/12/2026',
                status: 'Active',
                daysRemaining: 275,
                created: '01/01/2025 09:35',
                updated: '20/03/2026 10:30'
            }, {
                id: 2,
                cpaId: 'CPA-2025-002',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EXAT Donmuang',
                taxId: '0994000165421',
                app: 'EXAT SmartTax',
                provider: 'Host to Host',
                expire: '31/12/2026',
                status: 'Active',
                daysRemaining: 275,
                created: '01/01/2025 09:35',
                updated: '20/03/2026 10:32'
            }, {
                id: 3,
                cpaId: 'CPA-2025-003',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'TISCO Bank',
                taxId: '0107539000171',
                app: 'TISCO SmartTax',
                provider: 'BNG Service Provider',
                expire: '30/11/2026',
                status: 'Active',
                daysRemaining: 244,
                created: '14/02/2025 10:40',
                updated: '01/03/2026 09:00'
            }, {
                id: 4,
                cpaId: 'CPA-2025-004',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'PTT PLC',
                taxId: '0100549000173',
                app: 'PTT e-Tax',
                provider: 'Host to Host',
                expire: '28/02/2027',
                status: 'Active',
                daysRemaining: 334,
                created: '15/06/2025 08:00',
                updated: '28/03/2026 14:22'
            }, {
                id: 5,
                cpaId: 'CPA-2025-005',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'PTT Global Chemical',
                taxId: '0107554000100',
                app: 'PTT e-Tax',
                provider: 'Host to Host',
                expire: '28/02/2027',
                status: 'Active',
                daysRemaining: 334,
                created: '15/06/2025 08:10',
                updated: '28/03/2026 14:25'
            }, {
                id: 6,
                cpaId: 'CPA-2025-006',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'Bangkok Bank',
                taxId: '0107536000197',
                app: 'BBL Tax Connect',
                provider: 'UIH Service Provider',
                expire: '30/09/2026',
                status: 'Active',
                daysRemaining: 183,
                created: '20/08/2025 11:15',
                updated: '05/03/2026 09:45'
            }, {
                id: 7,
                cpaId: 'CPA-2025-007',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'SCB Securities',
                taxId: '0107556000134',
                app: 'SCG SmartInvoice',
                provider: 'BNG Service Provider',
                expire: '31/10/2026',
                status: 'Active',
                daysRemaining: 213,
                created: '01/10/2025 07:30',
                updated: '22/03/2026 16:00'
            }, {
                id: 8,
                cpaId: 'CPA-2025-008',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'SCG Packaging',
                taxId: '0107555000150',
                app: 'SCG SmartInvoice',
                provider: 'BNG Service Provider',
                expire: '31/10/2026',
                status: 'Active',
                daysRemaining: 213,
                created: '01/10/2025 07:45',
                updated: '22/03/2026 16:05'
            },

            // -- Step 4 Complete: Expiring Soon (=30 days) --
            {
                id: 9,
                cpaId: 'CPA-2025-009',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EXAT Chalerm',
                taxId: '0994000165423',
                app: 'EXAT SmartTax',
                provider: 'Host to Host',
                expire: '20/04/2026',
                status: 'Expiring Soon',
                daysRemaining: 19,
                created: '15/03/2025 10:00',
                updated: '20/03/2026 09:30'
            }, {
                id: 10,
                cpaId: 'CPA-2025-010',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EXAT Pattaya',
                taxId: '0994000165424',
                app: 'EXAT Branch Tax',
                provider: 'UIH Service Provider',
                expire: '15/04/2026',
                status: 'Expiring Soon',
                daysRemaining: 14,
                created: '01/06/2025 08:00',
                updated: '15/03/2026 10:00'
            }, {
                id: 11,
                cpaId: 'CPA-2025-011',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'AOT Suvarnabhumi',
                taxId: '0107545000292',
                app: 'AOT SmartTax',
                provider: 'Host to Host',
                expire: '10/04/2026',
                status: 'Expiring Soon',
                daysRemaining: 9,
                created: '24/03/2025 08:30',
                updated: '24/03/2026 09:00'
            },

            // -- Step 4 Complete: Expired --
            {
                id: 12,
                cpaId: 'CPA-2024-001',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EXAT M4',
                taxId: '0994000165422',
                app: 'EXAT Branch Tax',
                provider: 'UIH Service Provider',
                expire: '31/12/2024',
                status: 'Expired',
                daysRemaining: 0,
                created: '01/01/2025 09:35',
                updated: '31/12/2024 08:00'
            },

            // -- Step 3: XML Testing Pending -- (?????? Simulate Test ???)
            {
                id: 13,
                cpaId: 'CPA-2026-001',
                wizardStep: 3,
                xmlStatus: 'Pending',
                company: 'Banpu Power',
                taxId: '0107558000210',
                app: 'Banpu e-Tax',
                provider: 'Host to Host',
                expire: '-',
                status: 'Testing',
                daysRemaining: 0,
                created: '10/01/2026 09:00',
                updated: '25/03/2026 11:00'
            },

            // -- Step 3: XML Verified -- (?????? NEXT STEP ?? step 4 ???)
            {
                id: 14,
                cpaId: 'CPA-2026-002',
                wizardStep: 3,
                xmlStatus: 'Verified',
                company: 'IRPC PCL',
                taxId: '0107538000237',
                app: 'IRPC e-Tax',
                provider: 'Host to Host',
                expire: '-',
                status: 'Testing',
                daysRemaining: 0,
                created: '20/02/2026 13:00',
                updated: '28/03/2026 14:00'
            },

            // -- Step 3: XML Invalid -- (?????? Edit Information ???)
            {
                id: 15,
                cpaId: 'CPA-2026-003',
                wizardStep: 3,
                xmlStatus: 'Invalid',
                company: 'Indorama Ventures',
                taxId: '0107556000298',
                app: 'Indorama e-Invoice',
                provider: 'BNG Service Provider',
                expire: '-',
                status: 'Testing',
                daysRemaining: 0,
                created: '05/03/2026 10:30',
                updated: '29/03/2026 16:45'
            },

            // -- Step 2: UAT Registered -- (?????? NEXT STEP ???? XML test ???)
            {
                id: 16,
                cpaId: '',
                wizardStep: 2,
                xmlStatus: 'Pending',
                company: 'Siam Cement',
                taxId: '0100539000152',
                app: 'SCG SmartInvoice',
                provider: 'Host to Host',
                expire: '-',
                status: 'Registered',
                daysRemaining: 0,
                created: '15/03/2026 08:30',
                updated: '18/03/2026 09:00'
            },

            // -- Step 1: RD Appointment Done -- (?????? NEXT STEP ???? UAT ???)
            {
                id: 17,
                cpaId: '',
                wizardStep: 1,
                xmlStatus: 'Pending',
                company: 'Univanich Palm Oil',
                taxId: '0107524000321',
                app: 'Univanich e-Tax',
                provider: 'Host to Host',
                expire: '-',
                status: 'Appointed',
                daysRemaining: 0,
                created: '25/03/2026 10:00',
                updated: '25/03/2026 10:00'
            }, {
                id: 18,
                cpaId: '',
                wizardStep: 1,
                xmlStatus: 'Pending',
                company: 'Charoen Pokphand Foods',
                taxId: '0107536000109',
                app: 'CP Group e-Tax',
                provider: 'BNG Service Provider',
                expire: '-',
                status: 'Appointed',
                daysRemaining: 0,
                created: '28/03/2026 14:20',
                updated: '28/03/2026 14:20'
            }, {
                id: 19,
                cpaId: 'CPA-2025-009',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'Kasikorn Bank',
                taxId: '0107537000521',
                app: 'KBank e-Tax',
                provider: 'Host to Host',
                expire: '28/02/2027',
                status: 'Active',
                daysRemaining: 330,
                created: '05/02/2025 09:00',
                updated: '10/03/2026 08:30'
            }, {
                id: 20,
                cpaId: 'CPA-2025-010',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EGAT HQ',
                taxId: '0994000158312',
                app: 'EGAT e-Invoice',
                provider: 'UIH Service Provider',
                expire: '31/12/2026',
                status: 'Active',
                daysRemaining: 270,
                created: '10/03/2025 10:00',
                updated: '25/03/2026 11:00'
            }, {
                id: 21,
                cpaId: 'CPA-2025-011',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'True Corporation',
                taxId: '0107536001439',
                app: 'TRUE e-Tax',
                provider: 'BNG Service Provider',
                expire: '05/07/2026',
                status: 'Expiring Soon',
                daysRemaining: 89,
                created: '01/07/2025 08:00',
                updated: '20/03/2026 13:00'
            }, {
                id: 22,
                cpaId: 'CPA-2025-012',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'Advanced Info Service',
                taxId: '0107536001451',
                app: 'AIS e-Tax Connect',
                provider: 'Host to Host',
                expire: '31/08/2026',
                status: 'Active',
                daysRemaining: 147,
                created: '01/11/2025 07:00',
                updated: '28/03/2026 09:00'
            }, {
                id: 23,
                cpaId: 'CPA-2025-013',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'Thai Union Group',
                taxId: '0107554000206',
                app: 'Thai Union e-Tax',
                provider: 'Host to Host',
                expire: '30/11/2026',
                status: 'Active',
                daysRemaining: 237,
                created: '01/12/2025 08:30',
                updated: '22/03/2026 14:00'
            }, {
                id: 24,
                cpaId: 'CPA-2025-014',
                wizardStep: 4,
                xmlStatus: 'Verified',
                company: 'EGAT Mae Moh',
                taxId: '0994000158313',
                app: 'EGAT e-Invoice',
                provider: 'UIH Service Provider',
                expire: '31/12/2026',
                status: 'Active',
                daysRemaining: 270,
                created: '10/03/2025 10:30',
                updated: '25/03/2026 11:00'
            }, {
                id: 25,
                cpaId: '',
                wizardStep: 2,
                xmlStatus: 'Pending',
                company: 'CP All',
                taxId: '0107537001509',
                app: 'CP Group e-Tax',
                provider: 'Host to Host',
                expire: '-',
                status: 'Registered',
                daysRemaining: 0,
                created: '01/04/2026 10:00',
                updated: '01/04/2026 10:00'
            },
        ];

        let currentAppId = null,
            currentCompId = null,
            currentCPAId = null;
        let appEditMode = false,
            compEditMode = false;
        let appEditSource = 'view'; // 'view' or 'list'

        // -------------------------------------------------------
        //  PAGINATION
        // -------------------------------------------------------
        const pagers = {};

        function initPager(key, containerId, perPage = 10) {
            pagers[key] = {
                page: 1,
                perPage,
                data: [],
                containerId,
                renderFn: null
            }
        }

        function setPagerData(key, data, renderFn) {
            const p = pagers[key];
            if (!p) return renderFn(data);
            p.data = data;
            p.page = 1;
            p.renderFn = renderFn;
            _renderPager(key);
        }

        function _renderPager(key) {
            const p = pagers[key];
            if (!p || !p.renderFn) return;
            const s = (p.page - 1) * p.perPage;
            p.renderFn(p.data.slice(s, s + p.perPage));
            _updatePagUI(key);
        }

        function _updatePagUI(key) {
            const p = pagers[key];
            if (!p) return;
            const el = document.getElementById(p.containerId);
            if (!el) return;
            const tot = p.data.length,
                pages = Math.max(1, Math.ceil(tot / p.perPage));
            const s = tot ? (p.page - 1) * p.perPage + 1 : 0,
                e = Math.min(p.page * p.perPage, tot);
            // ??? rows-per-page + navigation ?????????????????
            const topEl = document.getElementById(key + 'Top');
            if (topEl) {
                topEl.innerHTML = `
      <span class="tb-total-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
        ${tot.toLocaleString()} ${i18n('pagItems')}
      </span>
      <div class="tb-right">
        <div class="tb-ppp-wrap">
          <span>${i18n('pagShow')}</span>
          <select class="tb-sel" onchange="changePPP('${key}',parseInt(this.value))">
            ${[10,25,50,100].map(n=>`<option value="${n}"${p.perPage==n?' selected':''}>${n}</option>`).join('')}
          </select>
          <span>${i18n('pagItems')}</span>
        </div>
        <div class="tb-pag">
          <button class="pag-btn" onclick="goPage('${key}',${p.page-1})" ${p.page<=1?'disabled':''} title="${i18n('pagPrev')}">&#8249;</button>
          <span class="pag-info">${p.page} / ${pages}</span>
          <button class="pag-btn" onclick="goPage('${key}',${p.page+1})" ${p.page>=pages?'disabled':''} title="${i18n('pagNext')}">&#8250;</button>
        </div>
      </div>`;
            }
            // navigation ????????
            if(pages<=1){el.innerHTML='';} else {
              const total=p.data.length;
              const from=(p.page-1)*p.perPage+1;
              const to=Math.min(p.page*p.perPage,total);
              // ????? page numbers ????? ellipsis
              const pgNums=[];
              for(let i=1;i<=pages;i++){
                if(i===1||i===pages||Math.abs(i-p.page)<=1) pgNums.push(i);
                else if(i===2&&p.page>4) pgNums.push('...');
                else if(i===pages-1&&p.page<pages-3) pgNums.push('...');
                else if(Math.abs(i-p.page)<=2) pgNums.push(i);
              }
              const deduped=[...new Map(pgNums.map((v,i)=>[i+'-'+v,v])).values()];
              el.innerHTML=`<div class="bot-pag-wrap">
                <span class="bot-pag-info">${i18n('pagShowRange')} <strong>${from}&ndash;${to}</strong> ${i18n('pagFrom')} <strong>${total}</strong> ${i18n('pagItems')}</span>
                <div class="bot-pag">
                  <button class="bot-pag-btn nav" onclick="goPage('${key}',${p.page-1})" ${p.page<=1?'disabled':''} title="${i18n('pagPrev')}">&#8249;</button>
                  ${deduped.map(v=>v==='...'
                    ?`<span class="bot-pag-ellipsis">&#8230;</span>`
                    :`<button class="bot-pag-btn${v===p.page?' active':''}" onclick="goPage('${key}',${v})">${v}</button>`
                  ).join('')}
                  <button class="bot-pag-btn nav" onclick="goPage('${key}',${p.page+1})" ${p.page>=pages?'disabled':''} title="${i18n('pagNext')}">&#8250;</button>
                </div>
              </div>`;
            }
}

// Sync PPP select with pager when pager changes
function _syncPPPSelect(key){
  const sel = document.getElementById(key+'PPP');
  if(sel) sel.value = pagers[key]?.perPage || 10;
}
function changePPP(key,val){const p=pagers[key];p.perPage=val;p.page=1;_renderPager(key)}
function goPage(key,pg){const p=pagers[key];const pages=Math.max(1,Math.ceil(p.data.length/p.perPage));p.page=Math.max(1,Math.min(pg,pages));_renderPager(key)}

// -------------------------------------------------------
//  NOTIFICATION
// -------------------------------------------------------
let notifList=[];
function buildNotifications(){
  notifList=[];
  cpas.forEach(cr=>{
    if(cr.wizardStep===4 && cr.status==='Expired')
      notifList.push({type:'danger',icon:'🔴',
        title:`CPA Expired: ${cr.company}`,
        sub:`${cr.cpaId} — Expired ${cr.expire}`,
        read:false,
        navFn:()=>{ highlightRow('cpa', cr.id, 'cpa'); }});
    else if(cr.wizardStep===4 && cr.status==='Expiring Soon')
      notifList.push({type:'warn',icon:'⚠️',
        title:`CPA Expiring Soon: ${cr.company}`,
        sub:`${cr.daysRemaining} days remaining (${cr.expire})`,
        read:false,
        navFn:()=>{ highlightRow('cpa', cr.id, 'cpa'); }});
    else if(cr.wizardStep===3 && cr.xmlStatus==='Invalid')
      notifList.push({type:'danger',icon:'❌',
        title:`XML Test Failed: ${cr.company}`,
        sub:`Please fix and resubmit`,
        read:false,
        navFn:()=>{ highlightRow('cpa', cr.id, 'cpa'); }});
    else if(cr.wizardStep===3 && cr.xmlStatus==='Pending')
      notifList.push({type:'info',icon:'🔄',
        title:`Awaiting XML Test: ${cr.company}`,
        sub:`Testing in progress`,
        read:false,
        navFn:()=>{ highlightRow('cpa', cr.id, 'cpa'); }});
    else if(cr.wizardStep===1)
      notifList.push({type:'info',icon:'📋',
        title:`CPA Pending Step 2: ${cr.company}`,
        sub:`Click NEXT STEP to Register UAT`,
        read:false,
        navFn:()=>{ highlightRow('cpa', cr.id, 'cpa'); }});
  });
  renderNotifications();
}
function renderNotifications(){
  const el=document.getElementById('notifList');
  const badge=document.getElementById('notifBadge');
  const unread=notifList.filter(n=>!n.read).length;
  badge.textContent=unread; badge.style.display=unread?'flex':'none';
  if(!notifList.length){el.innerHTML='<div class="notif-empty">'+i18n('toastNotifNone')+'</div>';return}
  el.innerHTML=notifList.map((n,i)=>`
    <div class="notif-item${n.read?'':' unread'}" onclick="readNotif(${i})">
      <div class="notif-item-icon ${n.type==='info'?'info':n.type}">${n.icon}</div>
      <div class="notif-item-body">
        <div class="notif-item-title">${n.title}</div>
        <div class="notif-item-sub">${n.sub}</div>
      </div>
    </div>`).join('');
}
function readNotif(i){
  const n=notifList[i];
  n.read=true;
  renderNotifications();
  document.getElementById('notifPanel').classList.remove('open');
  if(n.navFn) n.navFn();
}
function markAllRead(){notifList.forEach(n=>n.read=true);renderNotifications()}
function toggleNotif(e){
  e.stopPropagation();
  document.getElementById('notifPanel').classList.toggle('open');
}
document.addEventListener('click',e=>{
  if(!document.getElementById('notifWrap').contains(e.target))
    document.getElementById('notifPanel').classList.remove('open');
  document.querySelectorAll('.export-menu.open').forEach(m=>{
    if(!m.closest('.export-wrap').contains(e.target))m.classList.remove('open');
  });
});

// -------------------------------------------------------
//  EXPORT MENU
// -------------------------------------------------------
function toggleExportMenu(id){
  const m=document.getElementById(id);
  document.querySelectorAll('.export-menu.open').forEach(x=>{if(x.id!==id)x.classList.remove('open')});
  m.classList.toggle('open');
  event.stopPropagation();
}

// -------------------------------------------------------
//  NAVIGATION
// -------------------------------------------------------
function navigate(page){
  document.querySelectorAll('.page-view').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.page-view').forEach(p=>p.style.display='none');
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const pageEl = document.getElementById('page-'+page);
  if(pageEl){ pageEl.classList.add('active'); pageEl.style.display='block'; }
  const navEl=document.getElementById('nav-'+page);
  if(navEl)navEl.classList.add('active');
  const labels={application:'Application',company:'Company',cpa:'CPA',
    status:'RD Status Report',daily:'RD Daily Report',monthly:'RD Monthly Report'};
  document.getElementById('breadcrumbCurrent').textContent=labels[page]||page;
  if(page==='application')renderApps();
  if(page==='company'){renderCompanies();populateAppFilter()}
  if(page==='cpa')renderCPAs();
  if(page==='status')initStatusReport();
  if(page==='daily')initDailyReport();
  if(page==='monthly')initMonthlyReport();
  closeSidebar();
}

function goToCPAByCompany(compName){
  navigate('cpa');
  const input=document.getElementById('searchCPAComp');
  if(input){ input.value=compName; filterCPAs(); }
}

// -------------------------------------------------------
//  TOAST
// -------------------------------------------------------
function showToast(msg,type='success'){
  const t=document.getElementById('toast');
  t.style.borderLeftColor=type==='success'?'var(--accent)':type==='danger'?'var(--danger)':'var(--warn)';
  t.innerHTML=(type==='success'?'✅':type==='danger'?'❌':'⚠️')+' '+msg;
  t.style.opacity='1';t.style.transform='translateY(0)';
  setTimeout(()=>{t.style.opacity='0';t.style.transform='translateY(80px)'},2500);
}

// -------------------------------------------------------
//  MODAL HELPERS
// -------------------------------------------------------
function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
document.querySelectorAll('.overlay').forEach(o=>{
  o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open')})
});

// -------------------------------------------------------
//  APPLICATION — RENDER
// -------------------------------------------------------
function renderApps(list){
  const data=list||apps;
  setPagerData('apps',data,rows=>{
    const tbody=document.getElementById('appTableBody');
    if(!rows.length){tbody.innerHTML='<tr class="empty-row"><td colspan="7">'+i18n('emptyApp')+'</td></tr>';return}
    tbody.innerHTML=rows.map(a=>`
      <tr data-row-id="${a.id}" data-row-type="app">
        <td><strong>${a.name}</strong></td>
        <td><span class="badge ${a.protocol==='API'?'badge-api':'badge-mq'}">${a.protocol}</span></td>
        <td><div class="tag-list">${a.companies.map(c=>`<span class="tag">${c}</span>`).join('')||'<span style="color:var(--text3)">—</span>'}</div></td>
        <td class="date-cell mono">${a.created}</td>
        <td class="date-cell mono">${a.updated}</td>
        <td style="text-align:center">
          <label class="toggle-sw" title="${a.status==='Active'?'Active':'Inactive'}">
            <input type="checkbox" ${a.status==='Active'?'checked':''} onchange="toggleAppStatus(${a.id},this.checked,this)">
            <span class="toggle-track"></span>
          </label>
        </td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="openViewApp(${a.id})">View</button>
            <button class="btn btn-primary btn-xs" onclick="openEditApp(${a.id})">Edit</button>
          </div>
        </td>
      </tr>`).join('');
  });
}

function filterApps(){
  const name=document.getElementById('searchAppName').value.toLowerCase();
  const proto=document.getElementById('searchProtocol').value;
  const status=document.getElementById('searchStatus').value;
  renderApps(apps.filter(a=>(!name||a.name.toLowerCase().includes(name))&&(!proto||a.protocol===proto)&&(!status||a.status===status)));
}
function resetSearchApp(){
  ['searchAppName','searchProtocol','searchStatus'].forEach(id=>document.getElementById(id).value='');
  renderApps();
}

let _pendingStatusConfirm = null;

function showStatusConfirm(name, from, to, onConfirm, onCancel){
  const isActivating = to === 'Active';
  const color  = isActivating ? '#057a55' : '#c81e1e';
  const iconBg = isActivating ? 'rgba(5,122,85,.1)' : 'rgba(200,30,30,.08)';

  // Icon
  document.getElementById('confirmStatusIconWrap').style.background = iconBg;
  const svg = document.getElementById('confirmStatusIconSvg');
  svg.setAttribute('stroke', color);
  svg.innerHTML = isActivating
    ? '<polyline points="20 6 9 17 4 12"/>'
    : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>';

  // Title & message
  document.getElementById('confirmStatusTitle').textContent = isActivating ? i18n('statusActivate') : i18n('statusDeactivate');
  document.getElementById('confirmStatusMsg').textContent   = name;

  // Confirm button
  document.getElementById('confirmStatusBtn').style.background = color;

  // Status badges
  const styleFor = s => ({
    background : s==='Active' ? 'rgba(5,122,85,.1)'  : 'rgba(200,30,30,.07)',
    color      : s==='Active' ? '#057a55'             : '#c81e1e',
    border     : s==='Active' ? '1px solid rgba(5,122,85,.22)' : '1px solid rgba(200,30,30,.18)'
  });

  const fromEl = document.getElementById('confirmStatusFrom');
  fromEl.textContent = from;
  Object.assign(fromEl.style, styleFor(from));

  const toEl = document.getElementById('confirmStatusTo');
  toEl.textContent = to;
  Object.assign(toEl.style, styleFor(to));

  _pendingStatusConfirm = {onConfirm, onCancel};
  openModal('overlayConfirmStatus');
}
function doStatusConfirm(){
  closeModal('overlayConfirmStatus');
  if(_pendingStatusConfirm?.onConfirm) _pendingStatusConfirm.onConfirm();
  _pendingStatusConfirm = null;
}
function cancelStatusConfirm(){
  closeModal('overlayConfirmStatus');
  if(_pendingStatusConfirm?.onCancel) _pendingStatusConfirm.onCancel();
  _pendingStatusConfirm = null;
}

function toggleAppStatus(id,checked,el){
  const a=apps.find(x=>x.id===id); if(!a)return;
  const next=checked?'Active':'Inactive';
  showStatusConfirm(a.name, a.status, next,
    ()=>{
      a.status=next;
      a.updated=fmtDate(new Date());
      showToast(`"${a.name}" changed to ${a.status}`);
      renderApps();
    },
    ()=>{ if(el) el.checked=!checked; }
  );
}

// -------------------------------------------------------
//  APPLICATION — MODAL
// -------------------------------------------------------
function _loadAppToModal(a){
  document.getElementById('viewAppName').value=a.name;
  document.getElementById('viewAppStatus').value=a.status;
  document.getElementById('viewAppProtocol').value=a.protocol;
  if(a.protocol==='API'){
    document.getElementById('viewApiConfig').style.display='block';
    document.getElementById('viewMqConfig').style.display='none';
    document.getElementById('viewAppUrl').value=a.url||'';
    renderViewHeaders(a.headers||[]);
  } else {
    document.getElementById('viewApiConfig').style.display='none';
    document.getElementById('viewMqConfig').style.display='block';
    document.getElementById('viewMqUrl').value=a.mqUrl||'';
  }
  renderTokenTable(a.tokens||[]);
  renderAppCompTable(a.companies||[],a.name);
}

function setAppViewMode(){
  appEditMode=false;
  document.getElementById('appDetailModalTitle').innerHTML='<svg class="si si-md" viewBox="0 0 24 24" style="margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>Application Detail';
  ['viewAppName','viewAppUrl','viewMqUrl'].forEach(id=>{const e=document.getElementById(id);if(e){e.readOnly=true;e.classList.add('input-readonly')}});
  ['viewAppStatus','viewAppProtocol'].forEach(id=>{const e=document.getElementById(id);e.disabled=true;e.classList.add('input-readonly')});
  document.querySelectorAll('#viewHeadersList input').forEach(e=>{e.readOnly=true;e.classList.add('input-readonly')});
  document.querySelectorAll('#viewHeadersList .del-hdr-btn').forEach(b=>b.style.display='none');
  document.getElementById('viewAddHeaderBtn').style.display='none';
  document.getElementById('btnEditApp').style.display='inline-flex';
  document.getElementById('appEditActions').style.display='none';
  document.getElementById('compRemoveCol').style.display='none';
  // Token: Delete col hidden in view mode; Generate ALWAYS visible
  document.getElementById('tokenActionCol').style.display='none';
  // btnGenToken always visible — do NOT hide it
  const a=apps.find(x=>x.id===currentAppId);
  if(a){
    renderTokenTable(a.tokens||[],false);
    renderAppCompTable(a.companies||[],a.name,false);
  }
}

function setAppEditMode(){
  appEditMode=true;
  document.getElementById('appDetailModalTitle').innerHTML='<svg class="si si-md" viewBox="0 0 24 24" style="margin-right:6px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>Edit Application Detail';
  ['viewAppName','viewAppUrl','viewMqUrl'].forEach(id=>{const e=document.getElementById(id);if(e){e.readOnly=false;e.classList.remove('input-readonly')}});
  ['viewAppStatus','viewAppProtocol'].forEach(id=>{const e=document.getElementById(id);e.disabled=false;e.classList.remove('input-readonly')});
  document.querySelectorAll('#viewHeadersList input').forEach(e=>{e.readOnly=false;e.classList.remove('input-readonly')});
  document.querySelectorAll('#viewHeadersList .del-hdr-btn').forEach(b=>b.style.display='inline-flex');
  document.getElementById('viewAddHeaderBtn').style.display='block';
  document.getElementById('btnEditApp').style.display='none';
  document.getElementById('appEditActions').style.display='flex';
  document.getElementById('compRemoveCol').style.display='';
  // Token: Delete col shown in edit mode; Generate ALWAYS visible
  document.getElementById('tokenActionCol').style.display='';
  // btnGenToken always visible — do NOT hide it
  const a=apps.find(x=>x.id===currentAppId);
  if(a){
    renderTokenTable(a.tokens||[],true);
    renderAppCompTable(a.companies||[],a.name,true);
  }
}

function openViewApp(id){
  currentAppId=id; appEditSource='view';
  const a=apps.find(x=>x.id===id); if(!a)return;
  _loadAppToModal(a);
  setAppViewMode();
  openModal('overlayViewApp');
}

function openEditApp(id){
  currentAppId=id; appEditSource='list';
  const a=apps.find(x=>x.id===id); if(!a)return;
  _loadAppToModal(a);
  setAppEditMode();
  openModal('overlayViewApp');
}

function enterAppEditMode(){appEditSource='view';setAppEditMode()}

function cancelAppEdit(){
  const a=apps.find(x=>x.id===currentAppId); if(!a)return;
  _loadAppToModal(a); // restore
  setAppViewMode();
}

function saveApp(){
  const a=apps.find(x=>x.id===currentAppId); if(!a)return;
  a.name=document.getElementById('viewAppName').value;
  a.status=document.getElementById('viewAppStatus').value;
  const newProto=document.getElementById('viewAppProtocol').value;
  a.protocol=newProto;
  if(newProto==='API'){
    a.url=document.getElementById('viewAppUrl').value;
    const hdrs=[];
    document.querySelectorAll('#viewHeadersList .hdr-pair').forEach(row=>{
      const inputs=row.querySelectorAll('input');
      if(inputs[0].value)hdrs.push([inputs[0].value,inputs[1].value]);
    });
    a.headers=hdrs;
  } else {a.mqUrl=document.getElementById('viewMqUrl').value}
  a.updated=fmtDate(new Date());
  renderApps(); setAppViewMode();
  showToast(`Saved Application "${a.name}" successfully`);
}

function openCreateApp(){
  ['newAppName','newAppUrl','newMqUrl'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('newAppProtocol').value='';
  document.getElementById('newApiConfig').style.display='none';
  document.getElementById('newMqConfig').style.display='none';
  document.getElementById('newHeadersList').innerHTML='';
  openModal('overlayCreateApp');
}

function onProtocolChange(ctx){
  const val=document.getElementById(ctx==='new'?'newAppProtocol':'viewAppProtocol').value;
  if(ctx==='new'){
    document.getElementById('newApiConfig').style.display=val==='API'?'block':'none';
    document.getElementById('newMqConfig').style.display=val==='Message Queue'?'block':'none';
  } else {
    document.getElementById('viewApiConfig').style.display=val==='API'?'block':'none';
    document.getElementById('viewMqConfig').style.display=val==='Message Queue'?'block':'none';
  }
}

function addHeader(ctx){
  const container=document.getElementById(ctx==='new'?'newHeadersList':'viewHeadersList');
  const row=document.createElement('div');
  row.className='header-pair hdr-pair'; row.style.marginBottom='8px';
  const ro=ctx==='view'&&!appEditMode?'readonly':'';
  row.innerHTML=`<input class="input${ro?' input-readonly':''}" ${ro} placeholder="Header Key"><input class="input${ro?' input-readonly':''}" ${ro} placeholder="Header Value"><button class="btn btn-danger btn-sm del-hdr-btn" onclick="this.closest('.hdr-pair').remove()">— Del</button>`;
  container.appendChild(row);
}

function renderViewHeaders(headers){
  document.getElementById('viewHeadersList').innerHTML=headers.map((h,i)=>`
    <div class="header-pair hdr-pair" style="margin-bottom:8px" data-idx="${i}">
      <input class="input input-readonly" value="${h[0]}" readonly placeholder="Header Key">
      <input class="input input-readonly" value="${h[1]}" readonly placeholder="Header Value">
      <button class="btn btn-danger btn-sm del-hdr-btn" style="display:none" onclick="this.closest('.hdr-pair').remove()">— Del</button>
    </div>`).join('');
}

function createApp(){
  const name=document.getElementById('newAppName').value.trim();
  const proto=document.getElementById('newAppProtocol').value;
  if(!name||!proto){showToast(i18n('toastFillAll'),'warn');return}
  const headers=[];
  document.querySelectorAll('#newHeadersList .hdr-pair').forEach(row=>{
    const inputs=row.querySelectorAll('input');
    if(inputs[0].value)headers.push([inputs[0].value,inputs[1].value]);
  });
  const dateStr=fmtDate(new Date());
  apps.push({id:Date.now(),name,protocol:proto,status:'Active',companies:[],created:dateStr,updated:dateStr,
    url:document.getElementById('newAppUrl').value,mqUrl:document.getElementById('newMqUrl').value,headers,tokens:[]});
  renderApps(); populateAppFilter(); closeModal('overlayCreateApp');
  showToast(`Created Application "${name}" successfully`);
}

// -------------------------------------------------------
//  TOKEN
// -------------------------------------------------------
function renderTokenTable(tokens,canEdit=false){
  const tbody=document.getElementById('tokenTableBody');
  const actionCol=document.getElementById('tokenActionCol');
  // Action column (Delete) visible only in edit mode
  if(actionCol) actionCol.style.display = canEdit ? '' : 'none';
  if(!tokens.length){tbody.innerHTML=`<tr class="empty-row"><td colspan="5">${i18n('emptyToken')}</td></tr>`;return}
  tbody.innerHTML=tokens.map((t,i)=>`
    <tr>
      <td class="mono">${t.host}</td>
      <td><div class="token-cell">
        <span class="token-mask" id="tm${i}">————————————————————</span>
        <button class="btn btn-ghost btn-xs" onclick="viewToken(${i})">View</button>
        <button class="btn btn-ghost btn-xs" onclick="copyToken(${i})">Copy</button>
      </div></td>
      <td><span class="badge ${t.status==='Active'?'badge-active':'badge-inactive'}">${t.status}</span></td>
      <td class="date-cell mono">${t.created}</td>
      <td>${canEdit?`<button class="btn btn-danger btn-xs" onclick="deleteToken(${i})">— Delete</button>`:''}</td>
    </tr>`).join('');
  document.getElementById('tokenTableBody')._tokens=tokens;
}

function viewToken(i){
  const tokens=document.getElementById('tokenTableBody')._tokens;
  const el=document.getElementById('tm'+i);
  if(el.textContent.includes('—')){el.textContent=tokens[i].token;el.style.color='var(--primary)'}
  else{el.textContent='————————————————————';el.style.color=''}
}
function copyToken(i){
  const tokens=document.getElementById('tokenTableBody')._tokens;
  navigator.clipboard.writeText(tokens[i].token).catch(()=>{});
  showToast(i18n('toastCopied'));
}
function deleteToken(i){
  const a=apps.find(x=>x.id===currentAppId); if(!a)return;
  a.tokens.splice(i,1); renderTokenTable(a.tokens,true);
  showToast(i18n('toastTokenDel'),'danger');
}
function openGenerateToken(){
  document.getElementById('genTokenHost').value='';
  document.getElementById('genTokenExpiry').value='';
  openModal('overlayGenToken');
}
function generateToken(){
  const host=document.getElementById('genTokenHost').value.trim();
  if(!host){showToast(i18n('toastFillHost'),'warn');return}
  const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const token='eyJ'+Array.from({length:60},()=>chars[Math.floor(Math.random()*chars.length)]).join('');
  const a=apps.find(x=>x.id===currentAppId); if(!a)return;
  const d=new Date();
  a.tokens.push({host,token,status:'Active',created:`${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`});
  renderTokenTable(a.tokens,appEditMode); closeModal('overlayGenToken');
  showToast(`Created Token for ${host} successfully`);
}

// -------------------------------------------------------
//  APP COMPANY TABLE — show ALL companies
// -------------------------------------------------------
function renderAppCompTable(compNames, appName, canEdit=false){
  const tbody = document.getElementById('appCompTableBody');
  const removeCol = document.getElementById('compRemoveCol');
  if(removeCol) removeCol.style.display = canEdit ? '' : 'none';

  // Only show companies actually linked to this application
  const linked = companies.filter(c => compNames.includes(c.name));

  if(!linked.length){
    tbody.innerHTML=`<tr class="empty-row"><td colspan="8">${i18n('emptyNoAppComp')}</td></tr>`;
    return;
  }

  tbody.innerHTML = linked.map(c => {
    const statusCell = `
      <div class="status-toggle-cell">
        <span class="status-pill ${c.status==='Active'?'is-active':'is-inactive'}" id="acsp_${c.id}">${c.status}</span>
        <label class="toggle-sw" title="???? Active / Inactive">
          <input type="checkbox" ${c.status==='Active'?'checked':''} onchange="toggleCompStatusModal(${c.id},this.checked,this)">
          <span class="toggle-track"></span>
        </label>
      </div>`;

    const actionCell = canEdit
      ? `<td><button class="btn btn-danger btn-xs" onclick="removeCompanyFromApp('${c.name}')">? Remove</button></td>`
      : '<td></td>';

    return `<tr>
      <td><strong>${c.name}</strong></td>
      <td class="mono">${c.taxId}</td>
      <td>${c.app||'—'}</td>
      <td class="${c.cpaRemaining==='Expired'?'cpa-expired':'cpa-ok'}">${c.cpaRemaining}</td>
      <td class="date-cell mono">${c.created}</td>
      <td class="date-cell mono">${c.updated}</td>
      <td>${statusCell}</td>
      ${actionCell}
    </tr>`;
  }).join('');
}

function toggleCompStatusModal(id, checked, el){
  const c = companies.find(x=>x.id===id); if(!c) return;
  const next=checked?'Active':'Inactive';
  showStatusConfirm(c.name, c.status, next,
    ()=>{
      c.status=next; c.updated=fmtDate(new Date());
      const pill = document.getElementById('acsp_'+id);
      if(pill){pill.textContent=c.status; pill.className='status-pill '+(checked?'is-active':'is-inactive')}
      const mainPill = document.getElementById('csp_'+id);
      if(mainPill){mainPill.textContent=c.status; mainPill.className='status-pill '+(checked?'is-active':'is-inactive')}
      showToast(`"${c.name}" changed to ${c.status}`);
    },
    ()=>{ if(el) el.checked=!checked; }
  );
}

function addCompanyToApp(compName){
  const app = apps.find(x=>x.id===currentAppId); if(!app) return;
  if(!app.companies.includes(compName)) app.companies.push(compName);
  const comp = companies.find(c=>c.name===compName);
  if(comp) comp.app = app.name;
  app.updated = fmtDate(new Date());
  renderAppCompTable(app.companies, app.name, appEditMode);
  showToast(`Added "${compName}" to "${app.name}" successfully`);
}

function removeCompanyFromApp(compName){
  const app=apps.find(x=>x.id===currentAppId); if(!app)return;
  if(!confirm(`Unlink "${compName}" from "${app.name}"?`))return;
  app.companies=app.companies.filter(n=>n!==compName);
  const comp=companies.find(c=>c.name===compName);
  if(comp && comp.app===app.name) comp.app='—';
  app.updated=fmtDate(new Date());
  renderAppCompTable(app.companies,app.name,appEditMode);
  showToast(`Unlinked "${compName}" successfully`,'danger');
}

function openAssignCompany(){
  const app=apps.find(x=>x.id===currentAppId); if(!app)return;
  document.getElementById('assignAppName').textContent=app.name;
  const available=companies.filter(c=>!c.app||c.app==='—'||!apps.find(a=>a.name===c.app));
  const tbody=document.getElementById('assignCompTableBody');
  const noData=document.getElementById('assignNoData');
  if(!available.length){tbody.innerHTML='';noData.style.display='block'}
  else{
    noData.style.display='none';
    tbody.innerHTML=available.map(c=>`
      <tr style="cursor:pointer" onclick="toggleAssignRow(this,'${c.name}')">
        <td><input type="checkbox" class="assign-check" data-name="${c.name}" style="cursor:pointer;width:15px;height:15px"></td>
        <td><strong>${c.name}</strong></td><td class="mono">${c.taxId}</td>
        <td><span class="badge ${c.status==='Active'?'badge-active':'badge-inactive'}">${c.status}</span></td>
      </tr>`).join('');
  }
  openModal('overlayAssignCompany');
}
function toggleAssignRow(row,name){const cb=row.querySelector('.assign-check');cb.checked=!cb.checked;row.style.background=cb.checked?'var(--primary-dim)':''}
function confirmAssignCompany(){
  const app=apps.find(x=>x.id===currentAppId); if(!app)return;
  const checked=[...document.querySelectorAll('.assign-check:checked')].map(cb=>cb.dataset.name);
  if(!checked.length){showToast(i18n('toastSelectComp'),'warn');return}
  checked.forEach(name=>{
    if(!app.companies.includes(name))app.companies.push(name);
    const comp=companies.find(c=>c.name===name);
    if(comp)comp.app=app.name;
  });
  renderAppCompTable(app.companies,app.name,true);
  closeModal('overlayAssignCompany');
  showToast(`Assigned ${checked.length} Company to "${app.name}" successfully`);
}

// -------------------------------------------------------
//  COMPANY — RENDER
// -------------------------------------------------------
function renderCompanies(list){
  const data=list||companies;
  setPagerData('companies',data,rows=>{
    const tbody=document.getElementById('compTableBody');
    if(!rows.length){tbody.innerHTML='<tr class="empty-row"><td colspan="8">'+i18n('emptyComp')+'</td></tr>';return}
    tbody.innerHTML=rows.map(c=>`
      <tr data-row-id="${c.id}" data-row-type="company">
        <td><strong class="link-cell" onclick="goToCPAByCompany('${c.name}')" title="?? CPA ??? ${c.name}">${c.name}</strong></td>
        <td class="mono">${c.taxId}</td>
        <td>${c.app}</td>
        <td class="${c.cpaRemaining==='Expired'?'cpa-expired':'cpa-ok'}">${c.cpaRemaining}</td>
        <td class="date-cell mono">${c.created}</td>
        <td class="date-cell mono">${c.updated}</td>
        <td style="text-align:center">
          <label class="toggle-sw" title="${c.status==='Active'?'Active':'Inactive'}">
            <input type="checkbox" ${c.status==='Active'?'checked':''} onchange="toggleCompStatus(${c.id},this.checked,this)">
            <span class="toggle-track"></span>
          </label>
        </td>
        <td>
          <div style="display:flex;gap:4px">
            <button class="btn btn-outline btn-xs" onclick="openViewComp(${c.id})">View</button>
            <button class="btn btn-primary btn-xs" onclick="openEditComp(${c.id})">Edit</button>
          </div>
        </td>
      </tr>`).join('');
  });
}

function filterCompanies(){
  const name=document.getElementById('searchCompName').value.toLowerCase();
  const app=document.getElementById('searchCompApp').value;
  const status=document.getElementById('searchCompStatus').value;
  renderCompanies(companies.filter(c=>(!name||c.name.toLowerCase().includes(name))&&(!app||c.app===app)&&(!status||c.status===status)));
}
function resetSearchComp(){
  ['searchCompName','searchCompApp','searchCompStatus'].forEach(id=>document.getElementById(id).value='');
  renderCompanies();
}
function toggleCompStatus(id,checked,el){
  const c=companies.find(x=>x.id===id); if(!c)return;
  const next=checked?'Active':'Inactive';
  showStatusConfirm(c.name, c.status, next,
    ()=>{
      c.status=next; c.updated=fmtDate(new Date());
      const pill=document.getElementById('csp_'+id);
      if(pill){pill.textContent=c.status;pill.className='status-pill '+(checked?'is-active':'is-inactive')}
      else renderCompanies();
      showToast(`"${c.name}" changed to ${c.status}`);
    },
    ()=>{ if(el) el.checked=!checked; }
  );
}
function populateAppFilter(){
  ['searchCompApp','newCompApp'].forEach(selId=>{
    const sel=document.getElementById(selId); if(!sel)return;
    const isSearch=selId==='searchCompApp';
    sel.innerHTML=isSearch?'<option value="">Application — All</option>':'<option value="">— Select Application —</option>';
    apps.forEach(a=>{const opt=document.createElement('option');opt.value=a.name;opt.textContent=a.name;sel.appendChild(opt)});
  });
}

// -------------------------------------------------------
//  COMPANY — MODAL
// -------------------------------------------------------
function _loadCompToModal(c){
  document.getElementById('viewCompName').value=c.name;
  document.getElementById('viewCompTax').value=c.taxId;
  document.getElementById('viewCompEmail').value=c.email;
  document.getElementById('viewCompRD').value=c.rdUrl;
  document.getElementById('viewCompApp').value=c.app;
  document.getElementById('viewCompStatus').value=c.status;
  document.getElementById('viewCompCPA').value=c.cpaRemaining;
}
function setCompViewMode(){
  compEditMode=false;
  document.getElementById('overlayViewComp').querySelector('.modal-title').innerHTML='<svg class="si si-md" viewBox="0 0 24 24" style="margin-right:6px"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><path d="M9 7h.01M12 7h.01M15 7h.01M9 11h.01M12 11h.01M15 11h.01"/></svg>Company Detail';
  ['viewCompName','viewCompTax','viewCompEmail','viewCompRD','viewCompApp','viewCompCPA'].forEach(id=>{const e=document.getElementById(id);e.readOnly=true;e.classList.add('input-readonly')});
  const s=document.getElementById('viewCompStatus');s.disabled=true;s.classList.add('input-readonly');
  document.getElementById('btnEditComp').style.display='inline-flex';
  document.getElementById('compEditFooter').style.display='none';
}
function setCompEditMode(){
  compEditMode=true;
  document.getElementById('overlayViewComp').querySelector('.modal-title').innerHTML='<svg class="si si-md" viewBox="0 0 24 24" style="margin-right:6px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>Edit Company Detail';
  ['viewCompName','viewCompTax','viewCompEmail','viewCompRD','viewCompApp','viewCompCPA'].forEach(id=>{const e=document.getElementById(id);e.readOnly=false;e.classList.remove('input-readonly')});
  const s=document.getElementById('viewCompStatus');s.disabled=false;s.classList.remove('input-readonly');
  document.getElementById('btnEditComp').style.display='none';
  document.getElementById('compEditFooter').style.display='flex';
}
function openViewComp(id){
  currentCompId=id;
  const c=companies.find(x=>x.id===id); if(!c)return;
  _loadCompToModal(c); setCompViewMode();
  openModal('overlayViewComp');
}
function openEditComp(id){
  currentCompId=id;
  const c=companies.find(x=>x.id===id); if(!c)return;
  _loadCompToModal(c); setCompEditMode();
  openModal('overlayViewComp');
}
function enterCompEditMode(){setCompEditMode()}
function cancelCompEdit(){
  const c=companies.find(x=>x.id===currentCompId); if(!c)return;
  _loadCompToModal(c); setCompViewMode();
}
function saveComp(){
  const c=companies.find(x=>x.id===currentCompId); if(!c)return;
  c.name=document.getElementById('viewCompName').value;
  c.taxId=document.getElementById('viewCompTax').value;
  c.email=document.getElementById('viewCompEmail').value;
  c.rdUrl=document.getElementById('viewCompRD').value;
  c.app=document.getElementById('viewCompApp').value;
  c.status=document.getElementById('viewCompStatus').value;
  c.cpaRemaining=document.getElementById('viewCompCPA').value;
  c.updated=fmtDate(new Date());
  renderCompanies(); setCompViewMode();
  showToast(`Saved Company "${c.name}" successfully`);
}
function openCreateCompany(){
  populateAppFilter();
  ['newCompName','newCompTax','newCompEmail','newCompRD'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('newCompApp').value='';
  openModal('overlayCreateComp');
}
function createCompany(){
  const name=document.getElementById('newCompName').value.trim();
  const taxId=document.getElementById('newCompTax').value.trim();
  const email=document.getElementById('newCompEmail').value.trim();
  const rdUrl=document.getElementById('newCompRD').value.trim();
  const appName=document.getElementById('newCompApp').value;
  if(!name||!taxId||!appName){showToast(i18n('toastFillAll'),'warn');return}
  if(taxId.length!==13){showToast(i18n('toastTaxId13'),'warn');return}
  const dateStr=fmtDate(new Date());
  const newComp={id:Date.now(),name,taxId,email,rdUrl,app:appName,status:'Active',cpaRemaining:'365 days',created:dateStr,updated:dateStr};
  companies.push(newComp);
  const a=apps.find(x=>x.name===appName);
  if(a&&!a.companies.includes(name))a.companies.push(name);
  renderCompanies(); closeModal('overlayCreateComp');
  showToast(`Created Company "${name}" successfully`);
}

// -------------------------------------------------------
//  CPA — RENDER (simplified)
// -------------------------------------------------------
function renderCPAs(list){
  const data=list||cpas;
  setPagerData('cpas',data,rows=>{
    const tbody=document.getElementById('cpaTableBody');
    if(!rows.length){tbody.innerHTML='<tr class="empty-row"><td colspan="6">'+i18n('emptyCPA')+'</td></tr>';return}
    tbody.innerHTML=rows.map(cr=>{
      const step=cr.wizardStep||0;
      let statusCell='', actionCell='', expireTxt='—';

      if(step===0){
        statusCell=`<span class="cpa-step-badge step-none">—</span>`;
        actionCell='';
      } else if(step===1){
        statusCell=`<span class="cpa-step-badge step-2">Step 2</span>`;
        actionCell=`<button class="btn btn-primary btn-xs" onclick="continueWizard(${cr.id},2)">Continue</button>`;
      } else if(step===2){
        statusCell=`<span class="cpa-step-badge step-verified">Step 3</span>`;
        actionCell=`<button class="btn btn-primary btn-xs" onclick="continueWizard(${cr.id},3)">Continue</button>`;
      } else if(step===3){
        statusCell=`<span class="cpa-step-badge step-1">Step 4</span>`;
        actionCell=`<button class="btn btn-primary btn-xs" onclick="continueWizard(${cr.id},4)">Continue</button>`;
      } else {
        expireTxt=cr.expire||'—';
        const st=cr.status||'Active';
        const badgeCls=st==='Active'?'step-4-active':st==='Expiring Soon'?'step-4-expiring':'step-4-expired';
        statusCell=`<span class="cpa-step-badge ${badgeCls}">${st}</span>`;
        actionCell=`<button class="btn btn-outline btn-xs" onclick="openViewCPA(${cr.id})">View</button>`;
      }

      const linkedComp=companies.find(c=>c.name===cr.company);
      return `<tr data-row-id="${cr.id}" data-row-type="cpa">
        <td><strong class="${linkedComp?'link-cell':''}" ${linkedComp?`onclick="openViewComp(${linkedComp.id})" title="View Company"`:''}>${cr.company}</strong></td>
        <td class="mono">${cr.taxId||'—'}</td>
        <td>${statusCell}</td>
        <td class="date-cell mono">${expireTxt}</td>
        <td class="date-cell mono">${cr.created}</td>
        <td style="min-width:150px">${actionCell}</td>
      </tr>`;
    }).join('');
  });
}


function filterCPAs(){
  const name=document.getElementById('searchCPAComp').value.toLowerCase();
  const status=document.getElementById('searchCPAStatus').value;
  renderCPAs(cpas.filter(c=>(!name||c.company.toLowerCase().includes(name))&&(!status||c.status===status)));
}
function resetSearchCPA(){
  ['searchCPAComp','searchCPAStatus'].forEach(id=>document.getElementById(id).value='');
  renderCPAs();
}

// -- CPA Wizard helpers --
function _cpaShowStep(n){
  [1,2,3].forEach(i=>{
    const s=document.getElementById('cpaWizardStep'+i);
    const d=document.getElementById('cpaStep'+i+'Dot');
    if(s) s.style.display=(i===n)?'block':'none';
    if(d) d.className='cpa-step'+(i===n?' active':i<n?' done':'');
  });
  const _ic=(p)=>`<svg class="si si-md" viewBox="0 0 24 24" style="margin-right:6px">${p}</svg>`;
  const titles={
    1: _ic('<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>') + i18n('wizTitle1'),
    2: _ic('<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>')+'Register CPA UAT',
    3: _ic('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')+'Upload XML'
  };
  document.getElementById('cpaWizardTitle').innerHTML=titles[n]||'';
}

function openCreateCPA(){
  // Reset wizard
  ['newCPAPath','newCPATo'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=''});
  ['xmlTIV','xmlDBN','xmlCDN','xmlRCT'].forEach(id=>{const e=document.getElementById(id);if(e)e.value='';});
  ['labelTIV','labelDBN','labelCDN','labelRCT'].forEach(id=>{const e=document.getElementById(id);if(e){e.textContent=i18n('btnChooseFile');e.style.color='';e.style.borderColor=''}});
  _cpaShowStep(1);
  openModal('overlayCreateCPA');
}

function cpaWizardNext(fromStep){
  if(fromStep===1){
    // Go to step 2: populate company dropdown
    const sel=document.getElementById('newCPAComp');
    sel.innerHTML='<option value="">— Select Company —</option>';
    companies.forEach(c=>{const opt=document.createElement('option');opt.value=c.name;opt.textContent=c.name+' ('+c.taxId+')';sel.appendChild(opt)});
    _cpaShowStep(2);
  } else if(fromStep===2){
    // Validate step 2
    const comp=document.getElementById('newCPAComp').value;
    const path=document.getElementById('newCPAPath').value.trim();
    const to=document.getElementById('newCPATo').value;
    if(!comp||!path||!to){showToast(i18n('toastFillAll'),'warn');return}
    _cpaShowStep(3);
  }
}

function cpaWizardBack(fromStep){
  _cpaShowStep(fromStep-1);
}

function onXmlUpload(input, labelId){
  const label=document.getElementById(labelId);
  if(input.files&&input.files[0]){
    label.textContent='? '+input.files[0].name;
    label.style.color='var(--accent)';
    label.style.borderColor='var(--accent)';
  } else {
    label.textContent=i18n('btnChooseFile');
    label.style.color='';label.style.borderColor='';
  }
}

function createCPA(){
  const comp=document.getElementById('newCPAComp').value;
  const path=document.getElementById('newCPAPath').value.trim();
  const to=document.getElementById('newCPATo').value;
  if(!comp||!to){showToast(i18n('toastFillAll'),'warn');return}
  const c=companies.find(x=>x.name===comp);
  const toDate=new Date(to),today=new Date();
  const days=Math.max(0,Math.floor((toDate-today)/(1000*60*60*24)));
  const status=days===0?'Expired':days<=30?'Expiring Soon':'Active';
  const fmtShort=d=>{const dt=new Date(d);return`${pad(dt.getDate())}/${pad(dt.getMonth()+1)}/${dt.getFullYear()}`};
  const newId='CPA-'+new Date().getFullYear()+'-'+String(cpas.length+1).padStart(3,'0');
  const dateStr=fmtDate(new Date());
  cpas.push({id:Date.now(),cpaId:newId,company:comp,taxId:c?c.taxId:'',app:c?c.app:'',
    path,expire:fmtShort(to),status,daysRemaining:days,created:dateStr,updated:dateStr});
  if(c)c.cpaRemaining=status==='Expired'?'Expired':days+' days';
  buildNotifications(); renderCPAs(); closeModal('overlayCreateCPA');
  showToast(`Registered CPA for "${comp}" successfully ✅`);
}

function openViewCPA(id){
  currentCPAId=id;
  clearRowHighlight();
  const c=cpas.find(x=>x.id===id); if(!c)return;
  document.getElementById('viewCPAComp').value=c.company;
  document.getElementById('viewCPATax').value=c.taxId;
  document.getElementById('viewCPAExpire').value=(c.expire||'')+(c.expireTime?' '+c.expireTime:' 23:59:59');
  document.getElementById('viewCPAStatus').value=c.status;
  document.getElementById('viewCPADays').value=c.daysRemaining===0?'Expired':c.daysRemaining+' days';
  document.getElementById('viewCPACreated').value=c.created;
  document.getElementById('viewCPAUpdated').value=c.updated;
  openModal('overlayViewCPA');
}

// -------------------------------------------------------
//  CPA REPORT
// -------------------------------------------------------
/* REMOVED: renderCPAReport(list){

  const data=list||cpas;
  document.getElementById('cpaTotal').textContent=cpas.length;
  document.getElementById('cpaActive').textContent=cpas.filter(c=>c.status==='Active').length;
  document.getElementById('cpaExpiring').textContent=cpas.filter(c=>c.status==='Expiring Soon').length;
  document.getElementById('cpaExpired').textContent=cpas.filter(c=>c.status==='Expired').length;
  setPagerData('cpaReport',data,rows=>{
    const tbody=document.getElementById('cpaReportTableBody');
    if(!rows.length){tbody.innerHTML='<tr class="empty-row"><td colspan="8">'+i18n('emptyGeneral')+'</td></tr>';return}
    tbody.innerHTML=rows.map(c=>{
      const statusCls=c.status==='Active'?'badge-active':c.status==='Expiring Soon'?'badge-expiring':'badge-inactive';
      const days=c.daysRemaining===0?'<span style="color:var(--danger);font-weight:600">Expired</span>':c.daysRemaining<=30?`<span style="color:var(--warn);font-weight:600">${c.daysRemaining} days</span>`:`<span style="color:var(--accent)">${c.daysRemaining} days</span>`;
      return `<tr><td><strong>${c.company}</strong></td><td class="mono">${c.taxId}</td><td>${c.app}</td><td>${c.provider}</td><td class="mono date-cell">${c.expire}</td><td><span class="badge ${statusCls}">${c.status}</span></td><td>${days}</td><td class="mono date-cell">${c.created}</td></tr>`;
    }).join('');
  });
}*/
/* REMOVED: filterCPAReport(){

  const comp=document.getElementById('searchCPAReportComp').value.toLowerCase();
  const status=document.getElementById('searchCPAReportStatus').value;
  renderCPAReport(cpas.filter(c=>(!comp||c.company.toLowerCase().includes(comp))&&(!status||c.status===status)));
}*/
/* REMOVED: resetCPAReportFilter(){

  document.getElementById('searchCPAReportComp').value='';
  document.getElementById('searchCPAReportStatus').value='';
  renderCPAReport();
}*/

// -------------------------------------------------------
//  DAILY REPORT
// -------------------------------------------------------
// old dailyFiltered removed
/* old populateDailyFilters removed */
function renderDailyStats(data){
  const total=data.reduce((s,r)=>s+r.total,0),success=data.reduce((s,r)=>s+r.success,0),failed=data.reduce((s,r)=>s+r.failed,0);
  const rate=total?Math.round(success/total*100):0;
  document.getElementById('dailyStats').innerHTML=`
    <div class="stat-card"><div class="stat-label">Total Records</div><div class="stat-value">${total.toLocaleString()}</div><div class="stat-sub">${data.length} ${i18n('statSubRecords')}</div></div>
    <div class="stat-card"><div class="stat-label">Success</div><div class="stat-value" style="color:var(--accent)">${success.toLocaleString()}</div><div class="stat-sub">${i18n('statSubSuccess')}</div></div>
    <div class="stat-card"><div class="stat-label">Failed</div><div class="stat-value" style="color:var(--danger)">${failed.toLocaleString()}</div><div class="stat-sub">${i18n('statSubFailed')}</div></div>
    <div class="stat-card"><div class="stat-label">Success Rate</div><div class="stat-value" style="color:${rate>=99?'var(--accent)':rate>=95?'var(--warn)':'var(--danger)'}">${rate}%</div><div class="stat-sub">${i18n('statSubRate')}</div></div>`;
}
/* old renderDailyTable removed */
// renderDailyReport replaced above
/* old filterDailyReport removed */
/* old resetDailyFilter removed */

// -------------------------------------------------------
//  MONTHLY REPORT
// -------------------------------------------------------
// old monthlyFiltered removed
/* old populateMonthlyFilters removed */
function renderMonthlyStats(data){
  const total=data.reduce((s,r)=>s+r.total,0),success=data.reduce((s,r)=>s+r.success,0),failed=data.reduce((s,r)=>s+r.failed,0);
  const rate=total?Math.round(success/total*100):0;
  document.getElementById('monthlyStats').innerHTML=`
    <div class="stat-card"><div class="stat-label">Total Records</div><div class="stat-value">${total.toLocaleString()}</div><div class="stat-sub">${data.length} ${i18n('statSubRecords')}</div></div>
    <div class="stat-card"><div class="stat-label">Success</div><div class="stat-value" style="color:var(--accent)">${success.toLocaleString()}</div><div class="stat-sub">${i18n('statSubSuccess')}</div></div>
    <div class="stat-card"><div class="stat-label">Failed</div><div class="stat-value" style="color:var(--danger)">${failed.toLocaleString()}</div><div class="stat-sub">${i18n('statSubFailed')}</div></div>
    <div class="stat-card"><div class="stat-label">Success Rate</div><div class="stat-value" style="color:${rate>=99?'var(--accent)':rate>=95?'var(--warn)':'var(--danger)'}">${rate}%</div><div class="stat-sub">${i18n('statSubRate')}</div></div>`;
}
/* old renderMonthlyTable removed */
// renderMonthlyReport replaced above
/* old filterMonthlyReport removed */
/* old resetMonthlyFilter removed */

// -------------------------------------------------------
//  EXPORT — IMPROVED
// -------------------------------------------------------
function _xlsxDownload(wb,filename){
  XLSX.writeFile(wb,filename);
  showToast(`<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Export "${filename}" successfully`);
}
function _addSummarySheet(wb,title,stats){
  const ws=XLSX.utils.aoa_to_sheet([
    [title+' — Summary Report'],[''],
    ['Export Date',fmtDate(new Date())],[''],
    ...stats.map(s=>[s.label,s.value])
  ]);
  ws['!cols']=[{wch:25},{wch:30}];
  XLSX.utils.book_append_sheet(wb,ws,'Summary');
}

function exportAppsXLSX(){
  const wb=XLSX.utils.book_new();
  _addSummarySheet(wb,'Application',[
    {label:'Total Applications',value:apps.length},
    {label:'Active',value:apps.filter(a=>a.status==='Active').length},
    {label:'Inactive',value:apps.filter(a=>a.status==='Inactive').length},
    {label:'API Protocol',value:apps.filter(a=>a.protocol==='API').length},
    {label:'Message Queue Protocol',value:apps.filter(a=>a.protocol==='Message Queue').length},
  ]);
  const data=[
    ['Application Name','Protocol','Status','Companies','Created Date','Updated Date'],
    ...apps.map(a=>[a.name,a.protocol,a.status,a.companies.join(', '),a.created,a.updated])
  ];
  const ws=XLSX.utils.aoa_to_sheet(data);
  ws['!cols']=[{wch:25},{wch:15},{wch:12},{wch:30},{wch:20},{wch:20}];
  XLSX.utils.book_append_sheet(wb,ws,'Application List');
  _xlsxDownload(wb,'Application_Report.xlsx');
}
function exportAppsCSV(){
  const rows=[['Application Name','Protocol','Status','Companies','Created Date','Updated Date'],...apps.map(a=>[a.name,a.protocol,a.status,a.companies.join('|'),a.created,a.updated])];
  _downloadCSV(rows,'Application_Report.csv');
}

function exportCompaniesXLSX(){
  const wb=XLSX.utils.book_new();
  _addSummarySheet(wb,'Company',[
    {label:'Total Companies',value:companies.length},
    {label:'Active',value:companies.filter(c=>c.status==='Active').length},
    {label:'Inactive',value:companies.filter(c=>c.status==='Inactive').length},
    {label:'CPA Expired',value:companies.filter(c=>c.cpaRemaining==='Expired').length},
  ]);
  const data=[
    ['Company Name','Tax ID','Application','Status','CPA Remaining','Email','RD URL','Created Date','Updated Date'],
    ...companies.map(c=>[c.name,c.taxId,c.app,c.status,c.cpaRemaining,c.email,c.rdUrl,c.created,c.updated])
  ];
  const ws=XLSX.utils.aoa_to_sheet(data);
  ws['!cols']=[{wch:20},{wch:16},{wch:22},{wch:10},{wch:14},{wch:28},{wch:35},{wch:20},{wch:20}];
  XLSX.utils.book_append_sheet(wb,ws,'Company List');
  _xlsxDownload(wb,'Company_Report.xlsx');
}
function exportCompaniesCSV(){
  const rows=[['Company Name','Tax ID','Application','Status','CPA Remaining','Email','Created Date','Updated Date'],...companies.map(c=>[c.name,c.taxId,c.app,c.status,c.cpaRemaining,c.email,c.created,c.updated])];
  _downloadCSV(rows,'Company_Report.csv');
}

function exportCPAsXLSX(){
  const wb=XLSX.utils.book_new();
  _addSummarySheet(wb,'CPA',[
    {label:'Total CPA',value:cpas.length},
    {label:'Active',value:cpas.filter(c=>c.status==='Active').length},
    {label:'Expiring Soon',value:cpas.filter(c=>c.status==='Expiring Soon').length},
    {label:'Expired',value:cpas.filter(c=>c.status==='Expired').length},
  ]);
  const data=[
    ['Company Name','CPA ID','Tax ID','Application','Provider','CPA Expire','Status','Days Remaining','Created Date','Updated Date'],
    ...cpas.map(c=>[c.company,c.cpaId,c.taxId,c.app,c.provider,c.expire,c.status,c.daysRemaining===0?'Expired':c.daysRemaining+' days',c.created,c.updated])
  ];
  const ws=XLSX.utils.aoa_to_sheet(data);
  ws['!cols']=[{wch:22},{wch:16},{wch:16},{wch:22},{wch:22},{wch:14},{wch:14},{wch:14},{wch:20},{wch:20}];
  XLSX.utils.book_append_sheet(wb,ws,'CPA List');
  _xlsxDownload(wb,'CPA_Report.xlsx');
}
function exportCPAsCSV(){
  const rows=[['Company Name','CPA ID','Status','Created Date','Updated Date'],...cpas.map(c=>[c.company,c.cpaId,c.status,c.created,c.updated])];
  _downloadCSV(rows,'CPA_Report.csv');
}

function exportDailyXLSX(){
  const wb=XLSX.utils.book_new();
  const tot=dailyFiltered.reduce((s,r)=>s+r.total,0),suc=dailyFiltered.reduce((s,r)=>s+r.success,0),fail=dailyFiltered.reduce((s,r)=>s+r.failed,0);
  _addSummarySheet(wb,'Daily RD Report',[
    {label:'Total Records',value:tot},{label:'Success',value:suc},{label:'Failed',value:fail},
    {label:'Success Rate',value:tot?Math.round(suc/tot*100)+'%':'0%'},
    {label:'Rows in Export',value:dailyFiltered.length},
  ]);
  const data=[
    ['Date','Application','Company','Tax ID','Total Records','Success','Failed','Status','Submitted At'],
    ...dailyFiltered.map(r=>[r.date,r.app,r.company,r.taxId,r.total,r.success,r.failed,r.status,r.submittedAt])
  ];
  const ws=XLSX.utils.aoa_to_sheet(data);
  ws['!cols']=[{wch:14},{wch:22},{wch:16},{wch:16},{wch:14},{wch:10},{wch:8},{wch:12},{wch:20}];
  XLSX.utils.book_append_sheet(wb,ws,'Daily Report');
  _xlsxDownload(wb,'Daily_RD_Report.xlsx');
}
function exportDailyCSV(){
  const rows=[['Date','Application','Company','Tax ID','Total','Success','Failed','Status','Submitted At'],...dailyFiltered.map(r=>[r.date,r.app,r.company,r.taxId,r.total,r.success,r.failed,r.status,r.submittedAt])];
  _downloadCSV(rows,'Daily_RD_Report.csv');
}

function exportMonthlyXLSX(){
  const wb=XLSX.utils.book_new();
  const tot=monthlyFiltered.reduce((s,r)=>s+r.total,0),suc=monthlyFiltered.reduce((s,r)=>s+r.success,0),fail=monthlyFiltered.reduce((s,r)=>s+r.failed,0);
  _addSummarySheet(wb,'Monthly RD Submission',[
    {label:'Total Records',value:tot},{label:'Success',value:suc},{label:'Failed',value:fail},
    {label:'Success Rate',value:tot?Math.round(suc/tot*100)+'%':'0%'},
    {label:'Rows in Export',value:monthlyFiltered.length},
  ]);
  const data=[
    ['Year','Month','Application','Company','Tax ID','Total Records','Success','Failed','Success Rate','Last Submitted'],
    ...monthlyFiltered.map(r=>[r.year,r.monthName,r.app,r.company,r.taxId,r.total,r.success,r.failed,r.total?Math.round(r.success/r.total*100)+'%':'0%',r.lastSubmit])
  ];
  const ws=XLSX.utils.aoa_to_sheet(data);
  ws['!cols']=[{wch:8},{wch:14},{wch:22},{wch:16},{wch:16},{wch:14},{wch:10},{wch:8},{wch:14},{wch:20}];
  XLSX.utils.book_append_sheet(wb,ws,'Monthly Report');
  _xlsxDownload(wb,'Monthly_RD_Submission.xlsx');
}
function exportMonthlyCSV(){
  const rows=[['Year','Month','Application','Company','Tax ID','Total','Success','Failed','Rate','Last Submitted'],...monthlyFiltered.map(r=>[r.year,r.monthName,r.app,r.company,r.taxId,r.total,r.success,r.failed,r.total?Math.round(r.success/r.total*100)+'%':'0%',r.lastSubmit])];
  _downloadCSV(rows,'Monthly_RD_Submission.csv');
}

function _downloadCSV(rows,filename){
  const csv=rows.map(row=>row.map(cell=>`"${String(cell??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob=new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=filename;a.click();
  URL.revokeObjectURL(url);
  showToast(`<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Export "${filename}" successfully`);
}

// -------------------------------------------------------
//  UTILS
// -------------------------------------------------------
function pad(n){return String(n).padStart(2,'0')}
function fmtDate(d){return`${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`}


// -------------------------------------------------------
//  EXPORT GENERATING MODAL
// -------------------------------------------------------
function doExport(menuId, exportFn){
  // Close any open menus
  document.querySelectorAll('.export-menu.open').forEach(m=>m.classList.remove('open'));
  // Show generating modal
  const modal = document.getElementById('exportGeneratingModal');
  modal.style.display = 'block';
  // Re-trigger fill animation
  const fill = modal.querySelector('.export-gen-fill');
  fill.style.animation = 'none';
  fill.offsetHeight; // reflow
  fill.style.animation = 'fillBar 1.8s ease forwards';
  // Run export after short delay, then hide modal
  setTimeout(()=>{
    try{ exportFn(); }catch(e){ console.error(e); }
    setTimeout(()=>{ modal.style.display='none'; }, 400);
  }, 1900);
}

// -------------------------------------------------------
//  BAFS2 REPORT DATA (dailyData, monthlyData, statusData, fakeUsers)
// -------------------------------------------------------
const dailyData = [];
const monthlyData = [];
const statusData = [];

(function generateReportData(){
  const today2 = new Date();
  const curY2 = today2.getFullYear();
  const curM2 = today2.getMonth() + 1;

  for(let monthOffset = 0; monthOffset >= -2; monthOffset--) {
    const targetMonth = curM2 + monthOffset;
    const targetY = targetMonth <= 0 ? curY2 - 1 : targetMonth > 12 ? curY2 + 1 : curY2;
    const actualM = targetMonth <= 0 ? 12 + targetMonth : targetMonth > 12 ? targetMonth - 12 : targetMonth;
    const daysInM = new Date(targetY, actualM, 0).getDate();
    const mStr = String(actualM).padStart(2, '0');

    for(let d=1; d<=daysInM; d++) {
      const dStr = String(d).padStart(2, '0');
      const dateInputStr = `${targetY}-${mStr}-${dStr}`;
      const dateDisplayStr = `${dStr}/${mStr}/${targetY}`;

      const rounds = [
        { time: '08:00', c: 'EXATHQ', tax: '0994000165420', tot: 2000, await_resp: 150, acc: 1840, rej:  10, doc: 'Tax Invoice' },
        { time: '09:30', c: 'EXATDR', tax: '0994000165421', tot: 1500, await_resp: 120, acc: 1380, rej:   0, doc: 'Tax Invoice' },
        { time: '11:00', c: 'TISCO',  tax: '0107539000171', tot: 3000, await_resp: 200, acc: 2800, rej:   0, doc: 'Receipt'    },
        { time: '14:00', c: 'AOT',    tax: '0107545000292', tot: 1720, await_resp: 100, acc: 1600, rej:  20, doc: 'Tax Invoice' },
        { time: '15:30', c: 'EXATHQ', tax: '0994000165420', tot:  795, await_resp:  60, acc:  730, rej:   5, doc: 'Receipt'    },
        { time: '16:45', c: 'TISCO',  tax: '0107539000171', tot: 1238, await_resp:  80, acc: 1150, rej:   8, doc: 'Tax Invoice' }
      ];

      rounds.forEach((rd) => {
        const conv = `TP_${targetY}${mStr}${dStr}_${rd.time.replace(':','')}_${rd.c}`;
        let st = rd.rej > 0 ? (rd.rej === rd.tot ? 'Rejected' : 'Partial') : 'Accepted';

        dailyData.push({
          filterDateInput: dateInputStr,
          dateDisplay: dateDisplayStr,
          time: rd.time,
          app: 'EXAT SmartTax',
          company: rd.c,
          taxId: rd.tax,
          total: rd.tot,
          await_response: rd.await_resp,
          accepted: rd.acc,
          rejected: rd.rej,
          status: st,
          submittedAt: `${dateDisplayStr} ${rd.time}`,
          convId: conv
        });

        monthlyData.push({
          year: targetY,
          month: actualM,
          day: d,
          app: 'EXAT SmartTax',
          company: rd.c,
          taxId: rd.tax,
          total: rd.tot,
          await_response: rd.await_resp,
          accepted: rd.acc,
          rejected: rd.rej,
          lastSubmit: `${dateDisplayStr} ${rd.time}`
        });

        {
          const errorCodes = ['E0001', 'E0011', 'E0013', 'E0014', 'E0005', 'E0025'];
          const errorMessages = {
            'E0001': '{"code":400,"errorCode":"E0001","message":"Schema validation failed: XML structure does not match RD standard"}',
            'E0011': '{"code":400,"errorCode":"E0011","message":"Duplicate document: This invoice number was already submitted and accepted"}',
            'E0013': '{"code":401,"errorCode":"E0013","message":"Invalid digital signature: Certificate has expired"}',
            'E0014': '{"code":401,"errorCode":"E0014","message":"Invalid digital signature: Certificate was revoked"}',
            'E0005': '{"code":400,"errorCode":"E0005","message":"Invalid Tax ID: Tax ID does not match database or company not registered for e-Tax"}',
            'E0025': '{"code":400,"errorCode":"E0025","message":"Invalid date format: Date must be in YYYY-MM-DD format"}'
          };
          const errorReasons = {
            'E0001': 'XML structure has missing/extra or out-of-order tags that do not conform to RD standards',
            'E0011': 'This invoice/receipt number was previously submitted and already Accepted in the system',
            'E0013': 'Digital signature is invalid — file was modified after signing, or the certificate is expired/revoked',
            'E0014': 'Digital signature is invalid — file was modified after signing, or the certificate is expired/revoked',
            'E0005': 'The 13-digit taxpayer ID does not match the database, or the company is not approved for e-Tax Invoice & e-Receipt',
            'E0025': 'Date/time format in the invoice is not in the required standard format (must be YYYY-MM-DD)'
          };

          const sampleCount = Math.min(rd.tot, 50);
          // กระจาย accepted / await_response / rejected ตามสัดส่วนจริง
          const rejSample   = rd.rej  > 0 ? Math.max(1, Math.round((rd.rej  / rd.tot) * sampleCount)) : 0;
          const awaitSample = rd.await_resp > 0 ? Math.max(1, Math.round((rd.await_resp / rd.tot) * sampleCount)) : 0;
          const accSample   = sampleCount - rejSample - awaitSample;
          const invPrefix   = rd.doc === 'Receipt' ? 'RCP' : 'TIV';

          for(let i=1; i<=sampleCount; i++) {
            let invSt;
            if (i <= accSample) invSt = 'Accepted';
            else if (i <= accSample + awaitSample) invSt = 'await_response';
            else invSt = 'Rejected';

            let statusHistory = [];
            const baseTime = `${dateDisplayStr} ${rd.time}`;
            const ss = n => String(n).padStart(2,'0');
            statusHistory.push({ status:'Submitted',    timestamp:`${baseTime}:${ss((i*7)%60)}`,    message:'Document submitted to RD system', reason:null });
            statusHistory.push({ status:'Acknowledged', timestamp:`${baseTime}:${ss((i*7+15)%60)}`, message:'Document received and acknowledged by RD system', reason:null });
            statusHistory.push({ status:'Validating',   timestamp:`${baseTime}:${ss((i*7+30)%60)}`, message:'Validating document against RD schema and business rules', reason:null });
            if (invSt === 'Accepted') {
              statusHistory.push({ status:'Accepted', timestamp:`${baseTime}:${ss((i*7+45)%60)}`, message:'Schema validation passed. Document accepted.', reason:null });
            } else if (invSt === 'Rejected') {
              const errorCode = errorCodes[(i - accSample - awaitSample - 1) % errorCodes.length];
              statusHistory.push({ status:'Rejected', timestamp:`${baseTime}:${ss((i*7+45)%60)}`, message:`Schema validation failed. Error Code: ${errorCode}`, reason:errorReasons[errorCode], errorCode });
            }
            // await_response: history หยุดที่ Validating (ยังไม่มี final step)

            let rdMsg;
            if (invSt === 'Accepted') {
              rdMsg = '{"code":200,"message":"Schema validation passed. Document accepted."}';
            } else if (invSt === 'await_response') {
              rdMsg = '{"code":202,"message":"Document is being processed. Awaiting final response from RD."}';
            } else {
              const errorCode = errorCodes[(i - accSample - awaitSample - 1) % errorCodes.length];
              rdMsg = errorMessages[errorCode];
            }

            statusData.push({
              filterDateInput: dateInputStr,
              company: rd.c,
              docType: rd.doc,
              actionDate: `${dateDisplayStr} ${rd.time}:${ss((i*7+45)%60)}`,
              submittedAt: `${dateInputStr} ${rd.time}:00`,
              convId: conv,
              invoiceNo: `${invPrefix}-${rd.c}-${targetY}${mStr}${dStr}-${String(i).padStart(4,'0')}`,
              issueDate: dateDisplayStr,
              status: invSt,
              rdMessage: rdMsg,
              statusHistory: statusHistory
            });
          }
        }
      });
    }
  }
})();

const fakeUsers = [
  { id: 'user_all', name: 'All Users', company: 'All', email: 'all@company.com' },
  { id: 'user_001', name: 'Somchai Prasert', company: 'EXATHQ', email: 'somchai@exathq.com' },
  { id: 'user_002', name: 'Siriwan Tanaka', company: 'EXATHQ', email: 'siriwan@exathq.com' },
  { id: 'user_003', name: 'Narong Suwannarat', company: 'EXATDR', email: 'narong@exatdr.com' },
  { id: 'user_004', name: 'Pimchanok Wattana', company: 'EXATDR', email: 'pimchanok@exatdr.com' },
  { id: 'user_005', name: 'Kittisak Rattanachai', company: 'TISCO', email: 'kittisak@tisco.com' },
  { id: 'user_006', name: 'Anchalee Boonmee', company: 'TISCO', email: 'anchalee@tisco.com' },
  { id: 'user_007', name: 'Wichai Srisawat', company: 'AOT', email: 'wichai@aot.com' },
  { id: 'user_008', name: 'Pranee Jaidee', company: 'AOT', email: 'pranee@aot.com' }
];

// -------------------------------------------------------
//  REPORT STATE VARIABLES & USER SIMULATION (BAFS2)
// -------------------------------------------------------
let dailyGroupedFiltered = [];
let monthlyFiltered = [];
let statusFiltered = [];

let dailyPage = 1;
let monthlyPage = 1;
let statusPage = 1;

const USER_STORAGE_KEY = 'bafs_current_user';
let currentUser = null;

function loadCurrentUser() {
  try {
    const saved = localStorage.getItem(USER_STORAGE_KEY);
    if (saved) { const u = fakeUsers.find(x => x.id === saved); if (u) return u; }
  } catch(e) {}
  return fakeUsers[0];
}

function setCurrentUser(userId) {
  const user = fakeUsers.find(u => u.id === userId);
  if (user) {
    currentUser = user;
    localStorage.setItem(USER_STORAGE_KEY, userId);
    const topUserName = document.getElementById('topUserName');
    const topUserAvatar = document.getElementById('topUserAvatar');
    const userCompanyBadge = document.getElementById('userCompanyBadge');
    const userSelector = document.getElementById('userSelector');
    if (topUserName) topUserName.textContent = user.name;
    if (topUserAvatar) topUserAvatar.textContent = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    if (userCompanyBadge) userCompanyBadge.textContent = user.company === 'All' ? 'All Companies' : user.company;
    if (userSelector) userSelector.value = user.id;
    if (document.getElementById('dailyTableBody')) filterDailyReport();
    else if (document.getElementById('monthlyTableBody')) filterMonthlyReport();
    else if (document.getElementById('statusTableBody')) filterStatusReport();
  }
}

function filterDataByUser(data, companyField) {
  companyField = companyField || 'company';
  if (!currentUser || currentUser.company === 'All') return data;
  return data.filter(item => item[companyField] === currentUser.company);
}

function renderUserSelector() {
  const selector = document.getElementById('userSelector');
  if (!selector) return;
  selector.innerHTML = fakeUsers.map(u =>
    '<option value="'+u.id+'">'+u.name+' ('+u.company+')</option>'
  ).join('');
  if (currentUser) selector.value = currentUser.id;
}

function updateUserDisplay() {
  if (!currentUser) return;
  const topUserName = document.getElementById('topUserName');
  const topUserAvatar = document.getElementById('topUserAvatar');
  const userCompanyBadge = document.getElementById('userCompanyBadge');
  const userSelector = document.getElementById('userSelector');
  if (topUserName) topUserName.textContent = currentUser.name;
  if (topUserAvatar) topUserAvatar.textContent = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
  if (userCompanyBadge) userCompanyBadge.textContent = currentUser.company === 'All' ? 'All Companies' : currentUser.company;
  if (userSelector) userSelector.value = currentUser.id;
}

function initUserSimulation() {
  currentUser = loadCurrentUser();
  renderUserSelector();
  updateUserDisplay();
}

function getTodayStr() {
  const t = new Date();
  return t.getFullYear() + '-' + pad(t.getMonth()+1) + '-' + pad(t.getDate());
}

// -------------------------------------------------------
//  UTILITY FUNCTIONS
// -------------------------------------------------------
function generatePaginationHTML(currentPage, totalPages, functionName) {
  if (totalPages <= 0) return '';
  let html = '<button type="button" class="pagination-btn" data-action="'+functionName+'" data-page="'+(currentPage-1)+'" '+(currentPage<=1?'disabled':'')+'>&#8249;</button>';
  let startPage = Math.max(1, currentPage-2);
  let endPage = Math.min(totalPages, currentPage+2);
  if (startPage > 1) {
    html += '<button type="button" class="pagination-btn" data-action="'+functionName+'" data-page="1">1</button>';
    if (startPage > 2) html += '<span style="padding:0 4px;color:var(--text3);">\u2026</span>';
  }
  for (let i = startPage; i <= endPage; i++) {
    html += '<button type="button" class="pagination-btn '+(i===currentPage?'active-page':'')+'" data-action="'+functionName+'" data-page="'+i+'">'+i+'</button>';
  }
  if (endPage < totalPages) {
    if (endPage < totalPages-1) html += '<span style="padding:0 4px;color:var(--text3);">\u2026</span>';
    html += '<button type="button" class="pagination-btn" data-action="'+functionName+'" data-page="'+totalPages+'">'+totalPages+'</button>';
  }
  html += '<button type="button" class="pagination-btn" data-action="'+functionName+'" data-page="'+(currentPage+1)+'" '+(currentPage>=totalPages?'disabled':'')+'>&#8250;</button>';
  return html;
}

function updatePagInfo(id, start, end, total, unit) {
  const el = document.getElementById(id);
  if (!el) return;
  if (total === 0) el.textContent = '\u0e41\u0e2a\u0e14\u0e07 0\u20130 \u0e08\u0e32\u0e01 0 ' + unit;
  else el.textContent = '\u0e41\u0e2a\u0e14\u0e07 ' + (start+1) + '\u2013' + Math.min(end,total) + ' \u0e08\u0e32\u0e01 ' + total.toLocaleString() + ' ' + unit;
}

function showLoading(text) {
  text = text || i18n('loadingText');
  const textEl = document.getElementById('loadingText');
  if (textEl) textEl.textContent = text;
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.add('show');
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.remove('show');
}

function xlsxDownload(wb, filename) {
  XLSX.writeFile(wb, filename);
  showToast('Downloaded ' + filename + ' successfully');
}

// -------------------------------------------------------
//  COLUMN VISIBILITY & RESIZABLE COLUMNS
// -------------------------------------------------------
function loadColumnSettings(storageKey, defaults) {
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaults, ...parsed };
    }
  } catch (e) {}
  return { ...defaults };
}

function saveColumnSettings(storageKey, settings) {
  try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch (e) {}
}

function toggleColumnsDropdown(dropdownId, visibilityObj) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  const isVisible = dropdown.style.display !== 'none';
  document.querySelectorAll('.dropdown-menu').forEach(d => { d.style.display = 'none'; });
  if (!isVisible) {
    dropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = visibilityObj[cb.dataset.col] !== false;
    });
    dropdown.style.display = 'block';
  }
}

const STATUS_COLUMN_STORAGE_KEY = 'bafs_status_column_visibility';
const STATUS_COLUMN_DEFAULTS = { invoiceNo:true, docType:true, submittedAt:true, convId:true, issueDate:true, status:true, rdMessage:true, action:true };
let statusColumnVisibility = loadColumnSettings(STATUS_COLUMN_STORAGE_KEY, STATUS_COLUMN_DEFAULTS);

function toggleStatusColumnsDropdown() { toggleColumnsDropdown('statusColumnsDropdown', statusColumnVisibility); }
function toggleStatusColumn(col, visible) {
  statusColumnVisibility[col] = visible;
  saveColumnSettings(STATUS_COLUMN_STORAGE_KEY, statusColumnVisibility);
  renderStatusPage();
  setTimeout(() => { const t = document.querySelector('#statusTableBody')?.closest('table'); if (t) initResizableTable(t, STATUS_COLUMN_STORAGE_KEY); }, 50);
}
function resetStatusColumns() {
  statusColumnVisibility = { ...STATUS_COLUMN_DEFAULTS };
  saveColumnSettings(STATUS_COLUMN_STORAGE_KEY, statusColumnVisibility);
  const dd = document.getElementById('statusColumnsDropdown');
  if (dd) dd.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = statusColumnVisibility[cb.dataset.col]; });
  renderStatusPage();
  setTimeout(() => { const t = document.querySelector('#statusTableBody')?.closest('table'); if (t) initResizableTable(t, STATUS_COLUMN_STORAGE_KEY); }, 50);
}

const DAILY_COLUMN_STORAGE_KEY = 'bafs_daily_column_visibility';
const DAILY_COLUMN_DEFAULTS = { invoiceNo:true, company:true, docType:true, submittedAt:true, convId:true, actionDate:true, issueDate:true, status:true, rdMessage:true, action:true };
let dailyColumnVisibility = loadColumnSettings(DAILY_COLUMN_STORAGE_KEY, DAILY_COLUMN_DEFAULTS);

function toggleDailyColumnsDropdown() { toggleColumnsDropdown('dailyColumnsDropdown', dailyColumnVisibility); }
function toggleDailyColumn(col, visible) {
  dailyColumnVisibility[col] = visible;
  saveColumnSettings(DAILY_COLUMN_STORAGE_KEY, dailyColumnVisibility);
  renderDailyPage();
  setTimeout(() => { const t = document.querySelector('#dailyTableBody')?.closest('table'); if (t) initResizableTable(t, DAILY_COLUMN_STORAGE_KEY); }, 50);
}
function resetDailyColumns() {
  dailyColumnVisibility = { ...DAILY_COLUMN_DEFAULTS };
  saveColumnSettings(DAILY_COLUMN_STORAGE_KEY, dailyColumnVisibility);
  const dd = document.getElementById('dailyColumnsDropdown');
  if (dd) dd.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = dailyColumnVisibility[cb.dataset.col]; });
  renderDailyPage();
  setTimeout(() => { const t = document.querySelector('#dailyTableBody')?.closest('table'); if (t) initResizableTable(t, DAILY_COLUMN_STORAGE_KEY); }, 50);
}

const MONTHLY_COLUMN_STORAGE_KEY = 'bafs_monthly_column_visibility';
const MONTHLY_COLUMN_DEFAULTS = { date:true, company:true, taxId:true, total:true, await_response:true, accepted:true, rejected:true, lastSubmit:true, action:true };
let monthlyColumnVisibility = loadColumnSettings(MONTHLY_COLUMN_STORAGE_KEY, MONTHLY_COLUMN_DEFAULTS);

function toggleMonthlyColumnsDropdown() { toggleColumnsDropdown('monthlyColumnsDropdown', monthlyColumnVisibility); }
function toggleMonthlyColumn(col, visible) {
  monthlyColumnVisibility[col] = visible;
  saveColumnSettings(MONTHLY_COLUMN_STORAGE_KEY, monthlyColumnVisibility);
  renderMonthlyPage();
  setTimeout(() => { const t = document.querySelector('#monthlyTableBody')?.closest('table'); if (t) initResizableTable(t, MONTHLY_COLUMN_STORAGE_KEY); }, 50);
}
function resetMonthlyColumns() {
  monthlyColumnVisibility = { ...MONTHLY_COLUMN_DEFAULTS };
  saveColumnSettings(MONTHLY_COLUMN_STORAGE_KEY, monthlyColumnVisibility);
  const dd = document.getElementById('monthlyColumnsDropdown');
  if (dd) dd.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = monthlyColumnVisibility[cb.dataset.col]; });
  renderMonthlyPage();
  setTimeout(() => { const t = document.querySelector('#monthlyTableBody')?.closest('table'); if (t) initResizableTable(t, MONTHLY_COLUMN_STORAGE_KEY); }, 50);
}

// -- Resizable Columns --
const DEFAULT_COLUMN_WIDTHS = {
  invoiceNo:140, company:150, docType:130, submittedAt:160, convId:200,
  actionDate:120, issueDate:110, status:100, rdMessage:200, action:90,
  date:140, taxId:150, total:120, await_response:110, accepted:100, rejected:100, lastSubmit:160
};
const COL_KEY_ORDER = ['invoiceNo','company','docType','submittedAt','convId','actionDate','issueDate','status','rdMessage','action','date','taxId','total','await_response','accepted','rejected','lastSubmit'];

function loadColumnWidths(storageKey) {
  try {
    const saved = localStorage.getItem(storageKey+'_widths');
    if (saved) return { ...DEFAULT_COLUMN_WIDTHS, ...JSON.parse(saved) };
  } catch(e) {}
  return { ...DEFAULT_COLUMN_WIDTHS };
}

function saveColumnWidths(storageKey, widths) {
  try { localStorage.setItem(storageKey+'_widths', JSON.stringify(widths)); } catch(e) {}
}

let _curResizer = null, _curTable = null, _curColKey = '', _startX = 0, _startW = 0, _resizerStorageKey = '';

function initResizableTable(tableElement, storageKey) {
  if (!tableElement) return;
  const headerRow = tableElement.querySelector('thead tr');
  if (!headerRow) return;
  const ths = headerRow.querySelectorAll('th');
  const widths = loadColumnWidths(storageKey);
  ths.forEach((th, idx) => {
    const colKey = COL_KEY_ORDER[idx];
    if (!colKey) return;
    if (widths[colKey]) th.style.width = widths[colKey] + 'px';
    if (th.querySelector('.th-resizer')) return;
    const resizer = document.createElement('div');
    resizer.className = 'th-resizer';
    resizer.style.cssText = 'position:absolute;top:0;right:0;width:5px;height:100%;cursor:col-resize;z-index:10;user-select:none;';
    resizer.dataset.column = colKey;
    th.style.position = 'relative';
    th.appendChild(resizer);
    resizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      _curResizer = resizer; _curTable = tableElement;
      _curColKey = colKey; _startX = e.pageX; _startW = th.offsetWidth;
      _resizerStorageKey = storageKey;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    });
  });
}

document.addEventListener('mousemove', (e) => {
  if (!_curResizer || !_curTable) return;
  const diff = e.pageX - _startX;
  const newW = Math.max(50, _startW + diff);
  const th = _curResizer.parentElement;
  th.style.width = newW + 'px';
  const colIdx = Array.from(th.parentElement.children).indexOf(th);
  const tbody = _curTable.querySelector('tbody');
  if (tbody) tbody.querySelectorAll('tr').forEach(row => { const td = row.children[colIdx]; if (td) td.style.width = newW + 'px'; });
});

document.addEventListener('mouseup', () => {
  if (_curResizer && _curTable && _curColKey) {
    const newW = _curResizer.parentElement.offsetWidth;
    const widths = loadColumnWidths(_resizerStorageKey);
    widths[_curColKey] = newW;
    saveColumnWidths(_resizerStorageKey, widths);
  }
  _curResizer = null; _curTable = null; _curColKey = '';
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
});

function applyColumnWidths(tableElement, storageKey) {
  if (!tableElement) return;
  const widths = loadColumnWidths(storageKey);
  const ths = tableElement.querySelectorAll('thead tr th');
  ths.forEach((th, idx) => {
    const colKey = COL_KEY_ORDER[idx];
    if (colKey && widths[colKey]) th.style.width = widths[colKey] + 'px';
  });
  const rows = tableElement.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const tds = row.querySelectorAll('td');
    tds.forEach((td, idx) => {
      const colKey = COL_KEY_ORDER[idx];
      if (colKey && widths[colKey]) td.style.width = widths[colKey] + 'px';
    });
  });
}

// -------------------------------------------------------
//  RD DAILY REPORT
// -------------------------------------------------------
function initDailyReport() {
  initUserSimulation();
  const dateEl = document.getElementById('dailyFilterDate');
  if (dateEl) dateEl.value = getTodayStr();
  filterDailyReport();
  setTimeout(() => { const t = document.querySelector('#dailyTableBody')?.closest('table'); if (t) initResizableTable(t, DAILY_COLUMN_STORAGE_KEY); }, 100);
}

function filterDailyReport() {
  const dateInput = document.getElementById('dailyFilterDate')?.value || '';
  const status = document.getElementById('dailyFilterStatus')?.value || '';

  dailyGroupedFiltered = statusData.filter(r => {
    if (dateInput && r.filterDateInput !== dateInput) return false;
    if (status && status !== 'await_response' && r.status !== status) return false;
    return true;
  });
  dailyGroupedFiltered = filterDataByUser(dailyGroupedFiltered, 'company');

  const dailyDataForPeriod = dailyData.filter(r => {
    if (dateInput && r.filterDateInput !== dateInput) return false;
    return true;
  });
  const total = dailyDataForPeriod.reduce((s,r) => s + r.total, 0);
  const await_response = dailyDataForPeriod.reduce((s,r) => s + r.await_response, 0);
  const accepted = dailyDataForPeriod.reduce((s,r) => s + r.accepted, 0);
  const rejected = dailyDataForPeriod.reduce((s,r) => s + r.rejected, 0);
  renderDailyStats(total, await_response, accepted, rejected, status);
  dailyPage = 1;
  renderDailyPage();
}

function resetDailyFilter() {
  const dateEl = document.getElementById('dailyFilterDate');
  const statusEl = document.getElementById('dailyFilterStatus');
  if (dateEl) dateEl.value = getTodayStr();
  if (statusEl) statusEl.value = '';
  filterDailyReport();
}

function renderDailyStats(total, await_response, accepted, rejected, activeStatus) {
  activeStatus = activeStatus || '';
  const statsEl = document.getElementById('dailyStats');
  if (!statsEl) return;
  statsEl.innerHTML =
    '<div class="stat-card '+(activeStatus===''?'active':'')+'" data-action="resetDailyStatusFilter"><div class="stat-label">Total Document</div><div class="stat-value">'+total.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubTotal')+'</div></div>' +
    '<div class="stat-card '+(activeStatus==='await_response'?'active':'')+'" data-action="setDailyStatusFilter" data-status="await_response"><div class="stat-label">Awaiting Response</div><div class="stat-value" style="color:var(--primary);">'+await_response.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubAwaiting')+'</div></div>' +
    '<div class="stat-card '+(activeStatus==='Accepted'?'active':'')+'" data-action="setDailyStatusFilter" data-status="Accepted"><div class="stat-label">Accepted</div><div class="stat-value" style="color:var(--accent);">'+accepted.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubAccepted')+'</div></div>' +
    '<div class="stat-card '+(activeStatus==='Rejected'?'active':'')+'" data-action="setDailyStatusFilter" data-status="Rejected"><div class="stat-label">Rejected</div><div class="stat-value" style="color:var(--danger);">'+rejected.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubRejected')+'</div></div>';
}

function renderDailyPage() {
  const limit = parseInt(document.getElementById('dailyLimitSel')?.value) || 10;
  const totalPages = Math.max(1, Math.ceil(dailyGroupedFiltered.length / limit));
  if (dailyPage > totalPages) dailyPage = Math.max(1, totalPages);
  const start = (dailyPage-1)*limit, end = start+limit;
  const pageData = dailyGroupedFiltered.slice(start, end);
  const thead = document.getElementById('dailyTableHead');
  const tbody = document.getElementById('dailyTableBody');
  if (!tbody) return;

  let headerHtml = '<tr>';
  if (dailyColumnVisibility.invoiceNo) headerHtml += '<th>Invoice No.</th>';
  if (dailyColumnVisibility.company) headerHtml += '<th>Company</th>';
  if (dailyColumnVisibility.docType) headerHtml += '<th>Document Type</th>';
  if (dailyColumnVisibility.submittedAt) headerHtml += '<th>Submitted At</th>';
  if (dailyColumnVisibility.convId) headerHtml += '<th>Conversation ID</th>';
  if (dailyColumnVisibility.actionDate) headerHtml += '<th>Date Action</th>';
  if (dailyColumnVisibility.issueDate) headerHtml += '<th>Issue Date</th>';
  if (dailyColumnVisibility.status) headerHtml += '<th style="text-align:center;">Status</th>';
  if (dailyColumnVisibility.rdMessage) headerHtml += '<th>RD Message</th>';
  if (dailyColumnVisibility.action) headerHtml += '<th style="text-align:center;width:70px;">Action</th>';
  headerHtml += '</tr>';
  if (thead) thead.innerHTML = headerHtml;

  if (!pageData.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="10">'+i18n('emptyDaily')+'</td></tr>';
    const pagEl = document.getElementById('dailyPagination');
    if (pagEl) pagEl.innerHTML = generatePaginationHTML(dailyPage, totalPages, 'goDailyPage');
    updatePagInfo('dailyPagInfo', 0, 0, 0, i18n('unitRecords'));
    return;
  }

  tbody.innerHTML = pageData.map(r => {
    const sc = r.status==='Accepted'?'badge-active':r.status==='Rejected'?'badge-inactive':'badge-api';
    let rdMessageText = '';
    try { rdMessageText = JSON.parse(r.rdMessage).message || r.rdMessage; } catch(e) { rdMessageText = r.rdMessage || '-'; }
    let rowHtml = '<tr>';
    if (dailyColumnVisibility.invoiceNo) rowHtml += '<td class="mono" style="font-size:11px;">'+r.invoiceNo+'</td>';
    if (dailyColumnVisibility.company) rowHtml += '<td style="text-align:center;"><strong>'+r.company+'</strong></td>';
    if (dailyColumnVisibility.docType) rowHtml += '<td style="text-align:center;"><span class="badge badge-mq">'+(r.docType||'Tax Invoice')+'</span></td>';
    if (dailyColumnVisibility.submittedAt) rowHtml += '<td class="mono date-cell" style="text-align:center;">'+(r.submittedAt||'-')+'</td>';
    if (dailyColumnVisibility.convId) rowHtml += '<td class="mono" style="font-size:11px;color:var(--text2);">'+r.convId+'</td>';
    if (dailyColumnVisibility.actionDate) rowHtml += '<td class="mono date-cell" style="text-align:center;">'+(r.actionDate||'-')+'</td>';
    if (dailyColumnVisibility.issueDate) rowHtml += '<td class="mono date-cell" style="text-align:center;">'+r.issueDate+'</td>';
    if (dailyColumnVisibility.status) rowHtml += '<td style="text-align:center;"><span class="badge '+sc+'">'+r.status+'</span></td>';
    if (dailyColumnVisibility.rdMessage) rowHtml += '<td style="font-size:12px;color:'+(r.status==='Rejected'?'var(--danger)':'var(--text2)')+';max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="'+rdMessageText.replace(/"/g,'&quot;')+'">'+rdMessageText+'</td>';
    if (dailyColumnVisibility.action) rowHtml += '<td style="text-align:center;"><button type="button" class="btn btn-outline btn-xs" data-action="openRDDetailDirect" data-conv="'+r.convId+'"><i class="bi bi-eye"></i> View</button></td>';
    rowHtml += '</tr>';
    return rowHtml;
  }).join('');

  const pagEl = document.getElementById('dailyPagination');
  if (pagEl) pagEl.innerHTML = generatePaginationHTML(dailyPage, totalPages, 'goDailyPage');
  updatePagInfo('dailyPagInfo', start, end, dailyGroupedFiltered.length, i18n('unitRecords'));
  const table = document.querySelector('#dailyTableBody')?.closest('table');
  if (table) applyColumnWidths(table, DAILY_COLUMN_STORAGE_KEY);
}

function goDailyPage(p) {
  const limit = parseInt(document.getElementById('dailyLimitSel')?.value) || 10;
  const max = Math.max(1, Math.ceil(dailyGroupedFiltered.length/limit));
  dailyPage = Math.max(1, Math.min(p, max));
  renderDailyPage();
}

function setDailyStatusFilter(status) {
  const el = document.getElementById('dailyFilterStatus');
  if (el) el.value = status;
  filterDailyReport();
}

function resetDailyStatusFilter() {
  const el = document.getElementById('dailyFilterStatus');
  if (el) el.value = '';
  filterDailyReport();
}

function exportDailyReport() {
  showLoading(currentLang === 'TH' ? '\u0e01\u0e33\u0e25\u0e31\u0e07 Export RD Daily Report...' : 'Exporting RD Daily Report...');
  setTimeout(() => {
    const date = document.getElementById('dailyFilterDate')?.value || 'All';
    const now = fmtDate(new Date());
    const data = [
      ['RD Daily Report (Detail)','','','','','','','','','Print: '+now],
      ['Date Filter:', date],[''],
      ['Invoice No.','Company','Document Type','Submitted At','Conversation ID','Date Action','Issue Date','Status','RD Message']
    ];
    dailyGroupedFiltered.forEach(r => {
      let rdMessageText = '';
      try { rdMessageText = JSON.parse(r.rdMessage).message||r.rdMessage; } catch(e) { rdMessageText = r.rdMessage||'-'; }
      data.push([r.invoiceNo, r.company, r.docType, r.submittedAt, r.convId, r.actionDate, r.issueDate, r.status, rdMessageText]);
    });
    const wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(data);
    ws['!cols'] = [{wch:20},{wch:16},{wch:15},{wch:20},{wch:25},{wch:16},{wch:16},{wch:12},{wch:30}];
    XLSX.utils.book_append_sheet(wb, ws, 'Daily Details');
    xlsxDownload(wb, 'RD_Daily_Report_'+date+'.xlsx');
    hideLoading();
  }, 900);
}

// -------------------------------------------------------
//  RD MONTHLY REPORT
// -------------------------------------------------------
function getMonthlyFilterOpts() {
  const now = new Date();
  const curY = now.getFullYear(), curM = now.getMonth()+1;
  const opts = [];
  for (let i = 0; i < 4; i++) {
    let month = curM - i, year = curY;
    if (month <= 0) { month = 12 + month; year = curY - 1; }
    opts.push({ year, month });
  }
  return opts;
}

function initMonthlyReport() {
  initUserSimulation();
  const yearEl = document.getElementById('monthlyFilterYear');
  const monthEl = document.getElementById('monthlyFilterMonth');
  const curY = new Date().getFullYear(), curM = new Date().getMonth()+1;
  const filterOpts = getMonthlyFilterOpts();
  const monthNames = currentLang==='TH'
    ? ['','\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21','\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c','\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21','\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19','\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21','\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19','\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21','\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21','\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19','\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21','\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19','\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21']
    : ['','January','February','March','April','May','June','July','August','September','October','November','December'];
  if (yearEl && monthEl) {
    const uniqueYears = [...new Set(filterOpts.map(o => o.year))].sort((a,b) => b-a);
    yearEl.innerHTML = uniqueYears.map(y => '<option value="'+y+'"'+(y===curY?' selected':'')+'>'+y+'</option>').join('');
    const monthsForYear = filterOpts.filter(o => o.year === curY);
    monthEl.innerHTML = monthsForYear.length > 0
      ? monthsForYear.map(m => '<option value="'+m.month+'"'+(m.month===curM?' selected':'')+'>'+monthNames[m.month]+'</option>').join('')
      : '<option value="">'+i18n('noDataOption')+'</option>';
    yearEl.onchange = () => {
      const selY = parseInt(yearEl.value)||curY;
      const mForY = filterOpts.filter(o => o.year === selY);
      monthEl.innerHTML = mForY.length > 0
        ? mForY.map(m => '<option value="'+m.month+'">'+monthNames[m.month]+'</option>').join('')
        : '<option value="">'+i18n('noDataOption')+'</option>';
      filterMonthlyReport();
    };
  }
  if (monthEl) monthEl.value = curM;
  const compSel = document.getElementById('monthlyFilterComp');
  if (compSel) {
    const compNames = [...new Set(monthlyData.map(r => r.company))];
    compSel.innerHTML = '<option value="">All</option>' + compNames.map(c => '<option value="'+c+'">'+c+'</option>').join('');
  }
  filterMonthlyReport();
  setTimeout(() => { const t = document.querySelector('#monthlyTableBody')?.closest('table'); if (t) initResizableTable(t, MONTHLY_COLUMN_STORAGE_KEY); }, 100);
}

function filterMonthlyReport() {
  const year = parseInt(document.getElementById('monthlyFilterYear')?.value)||0;
  const month = parseInt(document.getElementById('monthlyFilterMonth')?.value)||0;
  let baseFiltered = filterDataByUser(monthlyData, 'company');
  baseFiltered = baseFiltered.filter(r => {
    if (year && r.year !== year) return false;
    if (month && r.month !== month) return false;
    return true;
  });
  const grouped = {};
  baseFiltered.forEach(r => {
    const key = r.year+'-'+r.month+'-'+r.day;
    if (!grouped[key]) grouped[key] = { year:r.year, month:r.month, day:r.day, companies:new Set(), taxIds:new Set(), total:0, await_response:0, accepted:0, rejected:0, lastSubmit:r.lastSubmit||'-', apps:[] };
    grouped[key].total += r.total;
    grouped[key].await_response += r.await_response;
    grouped[key].accepted += r.accepted;
    grouped[key].rejected += r.rejected;
    grouped[key].companies.add(r.company);
    grouped[key].taxIds.add(r.taxId);
    grouped[key].apps.push({ app:r.app||'EXAT SmartTax', company:r.company, taxId:r.taxId, total:r.total, await_response:r.await_response, accepted:r.accepted, rejected:r.rejected, lastSubmit:r.lastSubmit });
  });
  monthlyFiltered = Object.values(grouped).map(g => ({
    ...g,
    companiesList: Array.from(g.companies),
    taxIdsList: Array.from(g.taxIds),
    companyDisplay: g.companies.size > 1 ? g.companies.size+' Companies' : Array.from(g.companies)[0]
  })).sort((a,b) => new Date(b.year,b.month-1,b.day) - new Date(a.year,a.month-1,a.day));
  monthlyPage = 1;
  renderMonthlyStats();
  renderMonthlyPage();
}

function resetMonthlyFilter() {
  const curY = new Date().getFullYear(), curM = new Date().getMonth()+1;
  const yearEl = document.getElementById('monthlyFilterYear');
  const monthEl = document.getElementById('monthlyFilterMonth');
  const filterOpts = getMonthlyFilterOpts();
  const monthNames = currentLang==='TH'
    ? ['','\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21','\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c','\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21','\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19','\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21','\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19','\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21','\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21','\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19','\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21','\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19','\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21']
    : ['','January','February','March','April','May','June','July','August','September','October','November','December'];
  if (yearEl && monthEl) {
    const uniqueYears = [...new Set(filterOpts.map(o => o.year))].sort((a,b) => b-a);
    yearEl.innerHTML = uniqueYears.map(y => '<option value="'+y+'"'+(y===curY?' selected':'')+'>'+y+'</option>').join('');
    const mForY = filterOpts.filter(o => o.year === curY);
    monthEl.innerHTML = mForY.length > 0
      ? mForY.map(m => '<option value="'+m.month+'"'+(m.month===curM?' selected':'')+'>'+monthNames[m.month]+'</option>').join('')
      : '<option value="">'+i18n('noDataOption')+'</option>';
    yearEl.onchange = () => {
      const selY = parseInt(yearEl.value)||curY;
      const mForSY = filterOpts.filter(o => o.year === selY);
      monthEl.innerHTML = mForSY.length > 0
        ? mForSY.map(m => '<option value="'+m.month+'">'+monthNames[m.month]+'</option>').join('')
        : '<option value="">'+i18n('noDataOption')+'</option>';
      filterMonthlyReport();
    };
  }
  filterMonthlyReport();
}

function filterMonthlyByStatusQuick(type) {
  filterMonthlyReport();
  if (type === 'await_response') monthlyFiltered = monthlyFiltered.filter(r => r.await_response > 0);
  else if (type === 'accepted') monthlyFiltered = monthlyFiltered.filter(r => r.accepted > 0);
  else if (type === 'rejected') monthlyFiltered = monthlyFiltered.filter(r => r.rejected > 0);
  monthlyPage = 1;
  renderMonthlyStats(type);
  renderMonthlyPage();
}

function renderMonthlyStats(activeType) {
  activeType = activeType || '';
  const statsEl = document.getElementById('monthlyStats');
  if (!statsEl) return;
  const year = parseInt(document.getElementById('monthlyFilterYear')?.value)||0;
  const month = parseInt(document.getElementById('monthlyFilterMonth')?.value)||0;
  const allDataForPeriod = monthlyData.filter(r => {
    if (year && r.year!==year) return false;
    if (month && r.month!==month) return false;
    return true;
  });
  const total = allDataForPeriod.reduce((s,r) => s+r.total, 0);
  const await_response = allDataForPeriod.reduce((s,r) => s+r.await_response, 0);
  const accepted = allDataForPeriod.reduce((s,r) => s+r.accepted, 0);
  const rejected = allDataForPeriod.reduce((s,r) => s+r.rejected, 0);
  statsEl.innerHTML =
    '<div class="stat-card '+(activeType===''?'active':'')+'" data-action="filterMonthlyByStatusQuick" data-type=""><div class="stat-label">Total Document</div><div class="stat-value">'+total.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubClickReset')+'</div></div>' +
    '<div class="stat-card '+(activeType==='await_response'?'active':'')+'" data-action="filterMonthlyByStatusQuick" data-type="await_response"><div class="stat-label">Awaiting Response</div><div class="stat-value" style="color:var(--primary);">'+await_response.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubAwaiting')+'</div></div>' +
    '<div class="stat-card '+(activeType==='accepted'?'active':'')+'" data-action="filterMonthlyByStatusQuick" data-type="accepted"><div class="stat-label">Accepted</div><div class="stat-value" style="color:var(--accent);">'+accepted.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubAccepted')+'</div></div>' +
    '<div class="stat-card '+(activeType==='rejected'?'active':'')+'" data-action="filterMonthlyByStatusQuick" data-type="rejected"><div class="stat-label">Rejected</div><div class="stat-value" style="color:var(--danger);">'+rejected.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubRejected')+'</div></div>';
}

function renderMonthlyPage() {
  const limit = parseInt(document.getElementById('monthlyLimitSel')?.value)||31;
  const totalPages = Math.max(1, Math.ceil(monthlyFiltered.length/limit));
  if (monthlyPage > totalPages) monthlyPage = Math.max(1, totalPages);
  const start = (monthlyPage-1)*limit, end = start+limit;
  const pageData = monthlyFiltered.slice(start, end);
  const thead = document.getElementById('monthlyTableHead');
  const tbody = document.getElementById('monthlyTableBody');
  if (!tbody) return;

  let headerHtml = '<tr>';
  if (monthlyColumnVisibility.date) headerHtml += '<th>'+i18n('labelDate')+'</th>';
  if (monthlyColumnVisibility.company) headerHtml += '<th>Company</th>';
  if (monthlyColumnVisibility.taxId) headerHtml += '<th>Tax ID</th>';
  if (monthlyColumnVisibility.total) headerHtml += '<th style="text-align:right;">Total Document</th>';
  if (monthlyColumnVisibility.await_response) headerHtml += '<th style="text-align:right;">Awaiting Response</th>';
  if (monthlyColumnVisibility.accepted) headerHtml += '<th style="text-align:right;">Accepted</th>';
  if (monthlyColumnVisibility.rejected) headerHtml += '<th style="text-align:right;">Rejected</th>';
  if (monthlyColumnVisibility.lastSubmit) headerHtml += '<th>Last Submitted</th>';
  if (monthlyColumnVisibility.action) headerHtml += '<th style="text-align:center;width:100px;">Action</th>';
  headerHtml += '</tr>';
  if (thead) thead.innerHTML = headerHtml;

  if (!pageData.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="9">'+i18n('emptyMonthly')+'</td></tr>';
    const pagEl = document.getElementById('monthlyPagination');
    if (pagEl) pagEl.innerHTML = generatePaginationHTML(monthlyPage, totalPages, 'goMonthlyPage');
    updatePagInfo('monthlyPagInfo', 0, 0, 0, i18n('unitRecords'));
    return;
  }

  tbody.innerHTML = pageData.map((r, i) => {
    const formattedDate = pad(r.day)+'/'+pad(r.month)+'/'+r.year;
    const companyDisplay = r.companiesList.length > 3
      ? '<span style="color:var(--text2);font-size:12px;" title="'+r.companiesList.join(', ')+'">'+r.companiesList.slice(0,3).join(', ')+'...</span>'
      : '<strong>'+r.companiesList.join(', ')+'</strong>';
    const taxIdDisplay = r.taxIdsList.length > 1
      ? '<span style="color:var(--text2);font-size:11px;" title="'+r.taxIdsList.join(', ')+'">'+r.taxIdsList.length+' Tax IDs</span>'
      : r.taxIdsList[0];
    let rowHtml = '<tr>';
    if (monthlyColumnVisibility.date) rowHtml += '<td class="mono" style="font-weight:600;">'+formattedDate+'</td>';
    if (monthlyColumnVisibility.company) rowHtml += '<td style="text-align:center;">'+companyDisplay+'</td>';
    if (monthlyColumnVisibility.taxId) rowHtml += '<td class="mono" style="font-size:11px;">'+taxIdDisplay+'</td>';
    if (monthlyColumnVisibility.total) rowHtml += '<td style="text-align:right;">'+r.total.toLocaleString()+'</td>';
    if (monthlyColumnVisibility.await_response) rowHtml += '<td style="text-align:right;color:var(--primary);font-weight:600;">'+r.await_response.toLocaleString()+'</td>';
    if (monthlyColumnVisibility.accepted) rowHtml += '<td style="text-align:right;color:var(--accent);font-weight:600;">'+r.accepted.toLocaleString()+'</td>';
    if (monthlyColumnVisibility.rejected) rowHtml += '<td style="text-align:right;color:'+(r.rejected>0?'var(--danger)':'var(--text3)')+';">'+r.rejected.toLocaleString()+'</td>';
    if (monthlyColumnVisibility.lastSubmit) rowHtml += '<td class="mono date-cell">'+r.lastSubmit+'</td>';
    if (monthlyColumnVisibility.action) rowHtml += '<td style="text-align:center;"><button type="button" class="btn btn-outline btn-xs" data-action="goToDailyReportFromMonthlyDirect" data-year="'+r.year+'" data-month="'+r.month+'" data-day="'+r.day+'">View</button></td>';
    rowHtml += '</tr>';
    return rowHtml;
  }).join('');

  const pagEl = document.getElementById('monthlyPagination');
  if (pagEl) pagEl.innerHTML = generatePaginationHTML(monthlyPage, totalPages, 'goMonthlyPage');
  updatePagInfo('monthlyPagInfo', start, end, monthlyFiltered.length, i18n('unitRecords'));
  const table = document.querySelector('#monthlyTableBody')?.closest('table');
  if (table) applyColumnWidths(table, MONTHLY_COLUMN_STORAGE_KEY);
}

function goMonthlyPage(p) {
  const limit = parseInt(document.getElementById('monthlyLimitSel')?.value)||31;
  const max = Math.max(1, Math.ceil(monthlyFiltered.length/limit));
  monthlyPage = Math.max(1, Math.min(p, max));
  renderMonthlyPage();
}

function openAppModal(idx) {
  const data = monthlyFiltered[idx];
  if (!data) return;
  const formattedDate = pad(data.day)+'/'+pad(data.month)+'/'+data.year;
  const companyTitle = data.companiesList.length > 1 ? data.companiesList.length+' Companies' : data.companiesList[0];
  const taxIdTitle = data.taxIdsList.length > 1 ? data.taxIdsList.length+' Tax IDs' : data.taxIdsList[0];
  const titleEl = document.getElementById('appModalTitle');
  const subEl = document.getElementById('appModalSubTitle');
  if (titleEl) titleEl.innerHTML = (currentLang==='TH'?'\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17':'Company Detail')+': <strong style="color:var(--primary);">'+companyTitle+'</strong>';
  if (subEl) subEl.innerHTML = (currentLang==='TH'?'\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23':'Transaction Date')+': <strong>'+formattedDate+'</strong> &nbsp;|&nbsp; '+(currentLang==='TH'?'\u0e40\u0e25\u0e02\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e20\u0e32\u0e29\u0e35':'Tax ID')+': <strong class="mono">'+taxIdTitle+'</strong>';
  const companyData = {};
  data.apps.forEach(app => {
    if (!companyData[app.company]) companyData[app.company] = { company:app.company, total:0, await_response:0, accepted:0, rejected:0 };
    companyData[app.company].total += app.total;
    companyData[app.company].await_response += app.await_response;
    companyData[app.company].accepted += app.accepted;
    companyData[app.company].rejected += app.rejected;
  });
  const tbody = document.getElementById('appModalTableBody');
  if (tbody) {
    tbody.innerHTML = Object.values(companyData).map(company => {
      let statusBadge = company.rejected>0&&company.accepted===0?'<span class="badge badge-inactive">Rejected</span>':company.rejected>0?'<span class="badge badge-inactive">Partial</span>':'<span class="badge badge-active">Accepted</span>';
      return '<tr><td style="font-weight:500;">'+company.company+'</td><td style="text-align:right;">'+company.total.toLocaleString()+'</td><td style="text-align:right;color:var(--primary);font-weight:600;">'+company.await_response.toLocaleString()+'</td><td style="text-align:right;color:var(--accent);font-weight:600;">'+company.accepted.toLocaleString()+'</td><td style="text-align:right;color:'+(company.rejected>0?'var(--danger)':'var(--text3)')+';">'+company.rejected.toLocaleString()+'</td><td style="text-align:center;">'+statusBadge+'</td></tr>';
    }).join('');
  }
  openModal('overlayAppDetailReport');
}

function goToDailyReportFromMonthlyDirect(year, month, day) {
  navigate('daily');
  setTimeout(() => {
    const dateEl = document.getElementById('dailyFilterDate');
    if (dateEl) dateEl.value = year + '-' + pad(month) + '-' + pad(day);
    filterDailyReport();
  }, 60);
}

function exportMonthlyReport() {
  showLoading(currentLang === 'TH' ? '\u0e01\u0e33\u0e25\u0e31\u0e07 Export RD Monthly Report...' : 'Exporting RD Monthly Report...');
  setTimeout(() => {
    const yr = document.getElementById('monthlyFilterYear')?.value || '';
    const mo = document.getElementById('monthlyFilterMonth')?.value || 'All';
    const now = fmtDate(new Date());
    const data = [
      ['RD Monthly Report','','','','','','','','Print: '+now],
      ['Year:', yr, 'Month:', mo],[''],
      ['Date','Company','Tax ID','Total Document','Awaiting Response','Accepted','Rejected','Last Submitted']
    ];
    monthlyFiltered.forEach(r => {
      const formattedDate = pad(r.day)+'/'+pad(r.month)+'/'+r.year;
      data.push([formattedDate, r.companyDisplay, r.taxIdsList.join(', '), r.total, r.await_response, r.accepted, r.rejected, r.lastSubmit]);
    });
    const wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(data);
    ws['!cols'] = [{wch:12},{wch:16},{wch:16},{wch:16},{wch:12},{wch:10},{wch:16},{wch:22}];
    XLSX.utils.book_append_sheet(wb, ws, 'Monthly Report');
    xlsxDownload(wb, 'RD_Monthly_Report_'+yr+'_'+mo+'.xlsx');
    hideLoading();
  }, 900);
}

// -------------------------------------------------------
//  RD STATUS REPORT
// -------------------------------------------------------
function initStatusReport() {
  initUserSimulation();
  const dateEl = document.getElementById('statusFilterSubmitDate');
  if (dateEl) dateEl.value = getTodayStr();
  filterStatusReport();
  setTimeout(() => { const t = document.querySelector('#statusTableBody')?.closest('table'); if (t) initResizableTable(t, STATUS_COLUMN_STORAGE_KEY); }, 100);
}

function filterStatusReport() {
  const docType = document.getElementById('statusFilterDocType')?.value || '';
  const submitDate = document.getElementById('statusFilterSubmitDate')?.value || '';
  const convId = document.getElementById('statusFilterConvId')?.value || '';
  const invoice = document.getElementById('statusFilterInvoice')?.value || '';
  const issueDate = document.getElementById('statusFilterIssueDate')?.value || '';
  const status = document.getElementById('statusFilterStatus')?.value || '';
  const formatDateForSearch = (d) => {
    if (!d) return '';
    const [y, m, day] = d.split('-');
    return day+'/'+m+'/'+y;
  };
  const iDateStr = formatDateForSearch(issueDate);

  let baseData = filterDataByUser(statusData, 'company');
  baseData = baseData.filter(r => {
    if (docType && r.docType !== docType) return false;
    if (submitDate && r.filterDateInput !== submitDate) return false;
    if (convId && !r.convId.includes(convId)) return false;
    if (invoice && !r.invoiceNo.toLowerCase().includes(invoice.toLowerCase())) return false;
    if (iDateStr && r.issueDate !== iDateStr) return false;
    return true;
  });

  renderStatusStats(baseData);

  statusFiltered = baseData.filter(r => {
    if (status && status === 'await_response') return true;
    if (status && r.status.toLowerCase() !== status.toLowerCase()) return false;
    return true;
  });

  statusPage = 1;
  renderStatusPage();
}

function resetStatusFilter() {
  if (document.getElementById('statusFilterDocType')) document.getElementById('statusFilterDocType').value = '';
  if (document.getElementById('statusFilterSubmitDate')) document.getElementById('statusFilterSubmitDate').value = getTodayStr();
  if (document.getElementById('statusFilterConvId')) document.getElementById('statusFilterConvId').value = '';
  if (document.getElementById('statusFilterInvoice')) document.getElementById('statusFilterInvoice').value = '';
  if (document.getElementById('statusFilterIssueDate')) document.getElementById('statusFilterIssueDate').value = '';
  if (document.getElementById('statusFilterStatus')) document.getElementById('statusFilterStatus').value = '';
  filterStatusReport();
}

function renderStatusStats(data) {
  const statsEl = document.getElementById('statusStats');
  if (!statsEl) return;
  const total = data.length;
  const awaitRespCount = data.filter(r => r.status.toLowerCase()==='accepted'||r.status.toLowerCase()==='rejected').length;
  const accCount = data.filter(r => r.status.toLowerCase()==='accepted').length;
  const rejCount = data.filter(r => r.status.toLowerCase()==='rejected').length;
  statsEl.innerHTML =
    '<div class="stat-card" data-action="resetStatusStatusFilter"><div class="stat-label">Total Document</div><div class="stat-value">'+total.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubClickReset')+'</div></div>' +
    '<div class="stat-card" data-action="setStatusStatusFilter" data-status="await_response"><div class="stat-label">Awaiting Response</div><div class="stat-value" style="color:var(--primary);">'+awaitRespCount.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubAwaitingNoFilter')+'</div></div>' +
    '<div class="stat-card" data-action="setStatusStatusFilter" data-status="Accepted"><div class="stat-label">Accepted</div><div class="stat-value" style="color:var(--accent);">'+accCount.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubAcceptedNoFilter')+'</div></div>' +
    '<div class="stat-card" data-action="setStatusStatusFilter" data-status="Rejected"><div class="stat-label">Rejected</div><div class="stat-value" style="color:var(--danger);">'+rejCount.toLocaleString()+'</div><div class="stat-sub">'+i18n('statSubRejectedNoFilter')+'</div></div>';
}

function renderStatusPage() {
  const limit = parseInt(document.getElementById('statusLimitSel')?.value) || 10;
  const totalPages = Math.max(1, Math.ceil(statusFiltered.length / limit));
  if (statusPage > totalPages) statusPage = Math.max(1, totalPages);
  const start = (statusPage-1)*limit, end = start+limit;
  const pageData = statusFiltered.slice(start, end);
  const thead = document.getElementById('statusTableHead');
  const tbody = document.getElementById('statusTableBody');
  if (!tbody) return;

  let headerHtml = '<tr>';
  if (statusColumnVisibility.invoiceNo) headerHtml += '<th>Invoice No.</th>';
  if (statusColumnVisibility.docType) headerHtml += '<th>Document Type</th>';
  if (statusColumnVisibility.submittedAt) headerHtml += '<th>Submitted At</th>';
  if (statusColumnVisibility.convId) headerHtml += '<th>Conversation ID</th>';
  if (statusColumnVisibility.issueDate) headerHtml += '<th>Issue Date</th>';
  if (statusColumnVisibility.status) headerHtml += '<th style="text-align:center;">Status</th>';
  if (statusColumnVisibility.rdMessage) headerHtml += '<th>RD Message</th>';
  if (statusColumnVisibility.action) headerHtml += '<th style="text-align:center;width:70px;">Action</th>';
  headerHtml += '</tr>';
  if (thead) thead.innerHTML = headerHtml;

  if (!pageData.length) {
    tbody.innerHTML = '<tr class="empty-row"><td colspan="8">'+i18n('emptyStatus')+'</td></tr>';
    const pagEl = document.getElementById('statusPagination');
    if (pagEl) pagEl.innerHTML = generatePaginationHTML(statusPage, totalPages, 'goStatusPage');
    updatePagInfo('statusPagInfo', 0, 0, 0, i18n('unitRecords'));
    return;
  }

  tbody.innerHTML = pageData.map(r => {
    const statusLower = r.status.toLowerCase();
    const sc = statusLower==='accepted'?'badge-active':statusLower==='rejected'?'badge-inactive':'badge-api';
    let rdMessageText = '';
    try { rdMessageText = JSON.parse(r.rdMessage).message || r.rdMessage; } catch(e) { rdMessageText = r.rdMessage || '-'; }
    const rowStyle = statusLower==='rejected' ? 'background:var(--danger-dim);' : '';
    let rowHtml = '<tr style="'+rowStyle+'">';
    if (statusColumnVisibility.invoiceNo) rowHtml += '<td class="mono" style="font-size:11px;">'+r.invoiceNo+'</td>';
    if (statusColumnVisibility.docType) rowHtml += '<td style="text-align:center;font-weight:500;">'+(r.docType||'Tax Invoice')+'</td>';
    if (statusColumnVisibility.submittedAt) rowHtml += '<td class="mono date-cell" style="text-align:center;">'+(r.actionDate||r.submittedAt||'-')+'</td>';
    if (statusColumnVisibility.convId) rowHtml += '<td class="mono" style="font-size:11px;">'+r.convId+'</td>';
    if (statusColumnVisibility.issueDate) rowHtml += '<td class="mono date-cell" style="text-align:center;">'+r.issueDate+'</td>';
    if (statusColumnVisibility.status) rowHtml += '<td style="text-align:center;"><span class="badge '+sc+'">'+r.status+'</span></td>';
    if (statusColumnVisibility.rdMessage) rowHtml += '<td style="font-size:12px;color:var(--text2);max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="'+rdMessageText.replace(/"/g,'&quot;')+'">'+rdMessageText+'</td>';
    if (statusColumnVisibility.action) rowHtml += '<td style="text-align:center;"><button type="button" class="btn btn-outline btn-xs" data-action="openStatusHistory" data-conv="'+r.convId+'"><i class="bi bi-clock-history"></i> History</button></td>';
    rowHtml += '</tr>';
    return rowHtml;
  }).join('');

  const pagEl = document.getElementById('statusPagination');
  if (pagEl) pagEl.innerHTML = generatePaginationHTML(statusPage, totalPages, 'goStatusPage');
  updatePagInfo('statusPagInfo', start, end, statusFiltered.length, i18n('unitRecords'));
  const table = document.querySelector('#statusTableBody')?.closest('table');
  if (table) applyColumnWidths(table, STATUS_COLUMN_STORAGE_KEY);
}

function goStatusPage(p) {
  const limit = parseInt(document.getElementById('statusLimitSel')?.value) || 10;
  const max = Math.max(1, Math.ceil(statusFiltered.length/limit));
  statusPage = Math.max(1, Math.min(p, max));
  renderStatusPage();
}

function setStatusStatusFilter(status) {
  const el = document.getElementById('statusFilterStatus');
  if (el) el.value = status;
  filterStatusReport();
}

function resetStatusStatusFilter() {
  const el = document.getElementById('statusFilterStatus');
  if (el) el.value = '';
  filterStatusReport();
}

function exportStatusReport() {
  showLoading(currentLang === 'TH' ? '\u0e01\u0e33\u0e25\u0e31\u0e07 Export RD Status Report...' : 'Exporting RD Status Report...');
  setTimeout(() => {
    const now = fmtDate(new Date());
    const data = [
      ['RD Status Report','','','','','','','Print: '+now],[''],
      ['Document Type','Submitted At','Conversation ID','Invoice No.','Issue Date','Status','RD Message']
    ];
    statusFiltered.forEach(r => {
      let rdMessageText = '';
      try { rdMessageText = JSON.parse(r.rdMessage).message||r.rdMessage; } catch(e) { rdMessageText = r.rdMessage||'-'; }
      data.push([r.docType||'Tax Invoice', (r.actionDate||r.submittedAt||'-'), r.convId, r.invoiceNo, r.issueDate, r.status, rdMessageText]);
    });
    const wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(data);
    ws['!cols'] = [{wch:15},{wch:20},{wch:20},{wch:15},{wch:12},{wch:15},{wch:45}];
    XLSX.utils.book_append_sheet(wb, ws, 'Status Report');
    xlsxDownload(wb, 'RD_Status_Report_'+new Date().getTime()+'.xlsx');
    hideLoading();
  }, 900);
}

// -------------------------------------------------------
//  RD ERROR CODES & MODALS
// -------------------------------------------------------
const RD_ERROR_CODES = {
  'E0001': { code:'E0001', title:'\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e15\u0e32\u0e21\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19 (Schema validation failed)', description:'\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e44\u0e1f\u0e25\u0e4c XML \u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e21\u0e32 \u0e21\u0e35\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19\u0e41\u0e17\u0e47\u0e01 (Tag) \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e02\u0e32\u0e14/\u0e40\u0e01\u0e34\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e08\u0e31\u0e14\u0e40\u0e23\u0e35\u0e22\u0e07\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e23\u0e1e\u0e32\u0e01\u0e23\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e44\u0e27\u0e49' },
  'E0011': { code:'E0011', title:'\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e0b\u0e49\u0e33 (Duplicate document)', description:'\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e43\u0e1a\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e20\u0e32\u0e29\u0e35 \u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e1a\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e2a\u0e48\u0e07\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b \u0e40\u0e04\u0e22\u0e16\u0e39\u0e01\u0e19\u0e33\u0e2a\u0e48\u0e07\u0e41\u0e25\u0e30\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34 (Accepted) \u0e43\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27' },
  'E0013': { code:'E0013', title:'\u0e25\u0e32\u0e22\u0e21\u0e37\u0e2d\u0e0a\u0e37\u0e48\u0e2d\u0e14\u0e34\u0e08\u0e34\u0e17\u0e31\u0e25\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 (Invalid Digital Signature)', description:'\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2b\u0e31\u0e2a\u0e40\u0e0b\u0e47\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e07\u0e43\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32, \u0e44\u0e1f\u0e25\u0e4c\u0e16\u0e39\u0e01\u0e41\u0e01\u0e49\u0e44\u0e02\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e0b\u0e47\u0e19, \u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e1a\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07\u0e2d\u0e34\u0e40\u0e25\u0e47\u0e01\u0e17\u0e23\u0e2d\u0e19\u0e34\u0e01\u0e2a\u0e4c (Certificate) \u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38/\u0e16\u0e39\u0e01\u0e40\u0e1e\u0e34\u0e01\u0e16\u0e2d\u0e19' },
  'E0014': { code:'E0014', title:'\u0e25\u0e32\u0e22\u0e21\u0e37\u0e2d\u0e0a\u0e37\u0e48\u0e2d\u0e14\u0e34\u0e08\u0e34\u0e17\u0e31\u0e25\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07 (Invalid Digital Signature)', description:'\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2b\u0e31\u0e2a\u0e40\u0e0b\u0e47\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e25\u0e07\u0e43\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32, \u0e44\u0e1f\u0e25\u0e4c\u0e16\u0e39\u0e01\u0e41\u0e01\u0e49\u0e44\u0e02\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e0b\u0e47\u0e19, \u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e1a\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07\u0e2d\u0e34\u0e40\u0e25\u0e47\u0e01\u0e17\u0e23\u0e2d\u0e19\u0e34\u0e01\u0e2a\u0e4c (Certificate) \u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38/\u0e16\u0e39\u0e01\u0e40\u0e1e\u0e34\u0e01\u0e16\u0e2d\u0e19' },
  'E0005': { code:'E0005', title:'\u0e40\u0e25\u0e02\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e15\u0e31\u0e27\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e20\u0e32\u0e29\u0e35\u0e2d\u0e32\u0e01\u0e23\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07', description:'\u0e40\u0e25\u0e02 13 \u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e44\u0e21\u0e48\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e10\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2d\u0e19\u0e38\u0e21\u0e31\u0e15\u0e34\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e49\u0e32\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e23\u0e30\u0e1a\u0e1a e-Tax Invoice & e-Receipt' },
  'E0025': { code:'E0025', title:'\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e27\u0e25\u0e32\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07', description:'\u0e01\u0e32\u0e23\u0e23\u0e30\u0e1a\u0e38\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e27\u0e25\u0e32\u0e43\u0e19\u0e43\u0e1a\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e20\u0e32\u0e29\u0e35 \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e43\u0e0a\u0e49 Format \u0e21\u0e32\u0e15\u0e23\u0e10\u0e32\u0e19\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a (\u0e40\u0e0a\u0e48\u0e19 \u0e15\u0e49\u0e2d\u0e07\u0e40\u0e1b\u0e47\u0e19 YYYY-MM-DD)' }
};

function getErrorDescription(message) {
  if (!message) return null;
  try {
    const parsed = typeof message === 'string' ? JSON.parse(message) : message;
    const errorCode = parsed.errorCode || parsed.code || parsed.error;
    if (errorCode && RD_ERROR_CODES[errorCode]) return RD_ERROR_CODES[errorCode];
    for (const code in RD_ERROR_CODES) { if (message.includes(code)) return RD_ERROR_CODES[code]; }
  } catch(e) {
    for (const code in RD_ERROR_CODES) { if (message.includes(code)) return RD_ERROR_CODES[code]; }
  }
  return null;
}

function openRDDetailDirect(convId) {
  const data = statusData.find(x => x.convId === convId);
  if (!data) { showToast(i18n('toastNoData')); return; }
  const convEl = document.getElementById('rdDetailConvId');
  const statusEl = document.getElementById('rdDetailStatus');
  const jsonEl = document.getElementById('rdDetailJson');
  const xmlEl = document.getElementById('rdDetailXml');
  if (convEl) convEl.value = data.convId || '';
  if (statusEl) statusEl.value = (data.status||'').toUpperCase();
  if (jsonEl) jsonEl.value = data.rdMessage || '{}';
  if (xmlEl) xmlEl.value = '<?xml version="1.0" encoding="UTF-8"?>\n<RDResponse xmlns="http://rdservice.rd.go.th/etax">\n  <ResponseHeader>\n    <ConversationID>'+data.convId+'</ConversationID>\n    <Status>'+(data.status||'').toUpperCase()+'</Status>\n  </ResponseHeader>\n</RDResponse>';
  const isOk = data.status.toLowerCase()==='accepted';
  const isRej = data.status.toLowerCase()==='rejected';
  const color = isOk?'#d1fae5':isRej?'#fee2e2':'#eff6ff';
  const borderColor = isOk?'#34d399':isRej?'#f87171':'#93c5fd';
  let rdJson = {}, msgText = '', errorCode = null;
  try { rdJson = JSON.parse(data.rdMessage); msgText = rdJson.message||data.rdMessage; errorCode = rdJson.errorCode||rdJson.code||rdJson.error; } catch(e) { msgText = data.rdMessage; }
  const errorInfo = errorCode ? RD_ERROR_CODES[errorCode] : getErrorDescription(data.rdMessage);
  let errorSection = '';
  if (errorInfo && isRej) {
    errorSection = '<div style="background:#fef2f2;border:1px solid #f87171;border-radius:8px;padding:14px 16px;margin-bottom:12px;"><div style="font-weight:700;font-size:15px;color:#dc2626;margin-bottom:8px;">\u26a0\ufe0f '+errorInfo.title+'</div><div style="color:#7f1d1d;line-height:1.7;font-size:13px;">'+errorInfo.description+'</div></div>';
  }
  const htmlEl = document.getElementById('rdDetailHtml');
  if (htmlEl) htmlEl.innerHTML = '<div style="font-family:\'IBM Plex Sans Thai\',sans-serif;font-size:13px;"><div style="background:'+color+';border:1px solid '+borderColor+';border-radius:8px;padding:14px 16px;margin-bottom:12px;"><div style="font-weight:700;font-size:15px;margin-bottom:4px;">'+data.status.toUpperCase()+'</div></div>'+errorSection+'<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:12px 14px;"><div style="font-weight:700;color:#374151;margin-bottom:6px;">RD Message</div><div style="color:#1f2937;line-height:1.7;">'+msgText+'</div></div></div>';
  switchCodeTab('json');
  openModal('overlayRDDetail');
}

function openStatusHistory(convId) {
  const data = statusData.find(x => x.convId === convId);
  if (!data) { showToast(i18n('toastNoData')); return; }
  const histConvEl = document.getElementById('statusHistConvId');
  const histInvEl = document.getElementById('statusHistInvoice');
  const histStatusEl = document.getElementById('statusHistCurrentStatus');
  if (histConvEl) histConvEl.value = data.convId || '';
  if (histInvEl) histInvEl.value = data.invoiceNo || '';
  if (histStatusEl) histStatusEl.value = data.status.toUpperCase();
  const tbody = document.getElementById('statusHistTableBody');
  if (!tbody) return;
  if (data.statusHistory && data.statusHistory.length > 0) {
    tbody.innerHTML = data.statusHistory.map((h, idx) => {
      const badgeClass = h.status==='Accepted'?'badge-active':h.status==='Rejected'?'badge-inactive':'badge-api';
      let messageText = h.message || '-';
      if (h.status === 'Rejected' && h.reason) {
        const errorInfo = h.errorCode ? RD_ERROR_CODES[h.errorCode] : getErrorDescription(h.message);
        const errorTitle = errorInfo ? errorInfo.title : (h.errorCode || 'Unknown Error');
        messageText = '<div style="margin-bottom:6px;">'+messageText+'</div><div style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:10px 12px;margin-top:6px;"><div style="font-weight:600;font-size:12px;color:#dc2626;margin-bottom:6px;">\u26a0\ufe0f '+errorTitle+'</div><div style="color:#7f1d1d;line-height:1.6;font-size:12px;">'+h.reason+'</div></div>';
      }
      return '<tr><td style="text-align:center;font-weight:600;color:var(--primary);">'+(idx+1)+'</td><td class="mono" style="font-size:12px;">'+(h.timestamp||'-')+'</td><td style="text-align:center;"><span class="badge '+badgeClass+'">'+h.status+'</span></td><td style="font-size:12px;color:var(--text2);">'+messageText+'</td></tr>';
    }).join('');
  } else {
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text3);padding:20px;">No status history available</td></tr>';
  }
  openModal('overlayStatusHistory');
}

function switchCodeTab(tab) {
  ['json','html','xml'].forEach(t => {
    const btn = document.getElementById('codeBtn'+t.charAt(0).toUpperCase()+t.slice(1));
    const content = document.getElementById('code'+t.charAt(0).toUpperCase()+t.slice(1));
    if (btn) btn.classList.toggle('active', t===tab);
    if (content) content.classList.toggle('active', t===tab);
  });
}

// -------------------------------------------------------
//  CPA REGISTER WIZARD
// -------------------------------------------------------
let cpaWizardStep = 1;
let currentWizardCPAId = null;
function openRegisterCPA(){
  cpaWizardStep = 1;
  currentWizardCPAId = null;
  // Populate company dropdown in Step 1
  const sel1 = document.getElementById('cpaApptCompany');
  sel1.innerHTML = '<option value="">— Select Company —</option>';
  // ????????? "???" slot ???? = ?? CPA ????????? Expired (?????????????? ???? Active/Expiring Soon)
  const takenSet = new Set(
    cpas.filter(c => c.status !== 'Expired').map(c => c.company)
  );
  const available = companies.filter(co => !takenSet.has(co.name));
  const taken     = companies.filter(co =>  takenSet.has(co.name));
  available.forEach(co => {
    const opt = document.createElement('option');
    opt.value = co.name;
    opt.textContent = `${co.name} (${co.taxId})`;
    sel1.appendChild(opt);
  });
  // Reset fields
  ['cpaApptDate','cpaUATPath','cpaUATNote','cpaXMLNote','cpaPRODPath','cpaPRODNote'].forEach(id=>{
    const el=document.getElementById(id); if(el)el.value='';
  });
  // Lock note fields back to readonly
  ['cpaUATNote','cpaXMLNote','cpaPRODNote'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){el.setAttribute('readonly','');el.classList.add('input-readonly');}
  });
  document.getElementById('cpaUATCompany').value='';
  document.getElementById('cpaPRODCompany').value='';
  document.getElementById('cpaUATLocation').value='';
  document.getElementById('cpaPRODLocation').value='';
  // Reset upload
  const snEl=document.getElementById('xml-single-name');
  if(snEl){snEl.textContent='— (.xml)';snEl.style.color='';}
  const snBtn=document.getElementById('xml-upload-btn'); if(snBtn){snBtn.disabled=false;snBtn.textContent='<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload';}
  const snProg=document.getElementById('xml-upload-progress'); if(snProg)snProg.style.display='none';
  const snBar=document.getElementById('xml-progress-bar'); if(snBar){snBar.style.width='0%';snBar.style.background='var(--primary)';}
  const snRow=document.getElementById('xml-upload-row'); if(snRow)snRow.style.borderColor='';
  xmlUploadResults=[];
  renderXMLResults();
  _showCPAStep(1);
  openModal('overlayRegisterCPA');
}

function _showCPAStep(step){
  cpaWizardStep = step;
  [1,2,3,4].forEach(i=>{
    document.getElementById('cpaStep'+i).style.display = i===step?'flex':'none';
    document.getElementById('cpaStep'+i+'Footer').style.display = i===step?'flex':'none';
    const dot = document.getElementById('wd'+i);
    dot.className = 'wizard-dot' + (i<step?' done':i===step?' active':'');
    if(i<step) document.getElementById('wl'+i)?.classList.add('done');
    else document.getElementById('wl'+i)?.classList.remove('done');
  });
  const _i=(p)=>`<svg class="si si-md" viewBox="0 0 24 24" style="margin-right:6px">${p}</svg>`;
  const titles = {
    1: _i('<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>') + 'Register CPA — ' + i18n('wizTitle1'),
    2: _i('<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>')+'Register CPA — UAT Environment',
    3: _i('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')+'Register CPA — Upload XML Test',
    4: _i('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>')+'Register CPA — PROD Environment'
  };
  document.getElementById('cpaWizardTitle').innerHTML = titles[step];
  if(step===3) renderXMLResults();
  // reset Edit/Save buttons ??? step ????
  [2,3,4].forEach(s=>{
    const eb=document.getElementById('editBtn'+s);
    const sb=document.getElementById('saveBtn'+s);
    if(eb) eb.style.display='';
    if(sb) sb.style.display='none';
  });
}

function cpaWizardNext(fromStep){
  if(fromStep===1){
    // Step 1 complete — validate company
    const comp = document.getElementById('cpaApptCompany').value;
    if(!comp){showToast(i18n('toastSelectComp'),'warn');return}
    // Lock company in step 2
    document.getElementById('cpaUATCompany').value = comp;
    // Save/update CPA record with step 1 status
    if(!currentWizardCPAId){
      const co = companies.find(x=>x.name===comp);
      const now = fmtDate(new Date());
      const newId='CPA-'+new Date().getFullYear()+'-'+String(cpas.length+1).padStart(3,'0');
      const rec={id:Date.now(),cpaId:newId,company:comp,taxId:co?co.taxId:'',app:co?co.app:'',
        provider:'Host to Host',expire:'—',status:'—',daysRemaining:0,
        created:now,updated:now,wizardStep:1,xmlStatus:'Pending'};
      cpas.push(rec);
      currentWizardCPAId = rec.id;
    } else {
      const rec=cpas.find(x=>x.id===currentWizardCPAId);
      if(rec){rec.wizardStep=1; rec.updated=fmtDate(new Date());}
    }
    renderCPAs();
    _showCPAStep(2);
  } else if(fromStep===2){
    submitUAT();
  } else if(fromStep===3){
    _showCPAStep(4);
  } else {
    _showCPAStep(fromStep+1);
  }
}
function cpaWizardBack(step){ _showCPAStep(step); }

function submitUAT(){
  const comp = document.getElementById('cpaUATCompany').value;
  const path = document.getElementById('cpaUATPath').value.trim();
  const loc  = document.getElementById('cpaUATLocation').value;
  if(!path||!loc){showToast(i18n('toastFillAll'),'warn');return}
  // Update CPA record to step 2
  const rec = cpas.find(x=>x.id===currentWizardCPAId);
  if(rec){rec.wizardStep=2;rec.uatLocation=loc;rec.updated=fmtDate(new Date());}
  // Pre-fill PROD
  document.getElementById('cpaPRODCompany').value = comp||rec?.company||'';
  renderCPAs();
  _showCPAStep(3);
}

function submitPROD(){
  const path = document.getElementById('cpaPRODPath').value.trim();
  const loc  = document.getElementById('cpaPRODLocation').value;
  if(!path||!loc){showToast(i18n('toastFillAll'),'warn');return}
  const comp = document.getElementById('cpaPRODCompany').value;
  const co = companies.find(x=>x.name===comp);
  // Update existing record if continuing from wizard
  const existing = cpas.find(x=>x.id===currentWizardCPAId);
  if(existing){
    existing.wizardStep=4; existing.xmlStatus='Verified';
    existing.prodLocation=loc; existing.status='Active';
    existing.updated=fmtDate(new Date());
    if(!existing.cpaId||existing.cpaId==='') existing.cpaId='CPA-'+new Date().getFullYear()+'-'+String(cpas.length).padStart(3,'0');
  } else {
    const newId='CPA-'+new Date().getFullYear()+'-'+String(cpas.length+1).padStart(3,'0');
    cpas.push({id:Date.now(),cpaId:newId,wizardStep:4,xmlStatus:'Verified',
      company:comp,taxId:co?co.taxId:'',app:co?co.app:'',prodLocation:loc,
      status:'Active',daysRemaining:0,
      created:fmtDate(new Date()),updated:fmtDate(new Date())});
  }
  if(co) co.cpaRemaining = 'Active';
  buildNotifications(); renderCPAs(); closeModal('overlayRegisterCPA');
  showToast(`Registered CPA PROD for "${comp}" successfully 🎉`);
}

let xmlUploadResults = [
  {id:1,selected:false,convId:'CONV-2026-00001',invoiceId:'INV-001-0001',type:'TIV',status:'rd accepted',fileName:'tiv_uat_test.xml',lastChange:'01/04/2026 09:15'},
  {id:2,selected:false,convId:'CONV-2026-00002',invoiceId:'INV-001-0002',type:'TIV',status:'rd acknowledged',fileName:'tiv_uat_test.xml',lastChange:'01/04/2026 09:16'},
  {id:3,selected:false,convId:'CONV-2026-00003',invoiceId:'INV-001-0003',type:'TIV',status:'rd rejected',fileName:'tiv_uat_test.xml',lastChange:'01/04/2026 09:17'},
  {id:4,selected:false,convId:'CONV-2026-00004',invoiceId:'DBN-002-0001',type:'DBN',status:'rd accepted',fileName:'dbn_uat_test.xml',lastChange:'01/04/2026 09:20'},
  {id:5,selected:false,convId:'CONV-2026-00005',invoiceId:'DBN-002-0002',type:'DBN',status:'rd acknowledged',fileName:'dbn_uat_test.xml',lastChange:'01/04/2026 09:21'},
  {id:6,selected:false,convId:'CONV-2026-00006',invoiceId:'CDN-003-0001',type:'CDN',status:'rd accepted',fileName:'cdn_uat_test.xml',lastChange:'01/04/2026 09:25'},
  {id:7,selected:false,convId:'CONV-2026-00007',invoiceId:'CDN-003-0002',type:'CDN',status:'rd rejected',fileName:'cdn_uat_test.xml',lastChange:'01/04/2026 09:26'},
  {id:8,selected:false,convId:'CONV-2026-00008',invoiceId:'CDN-003-0003',type:'CDN',status:'rd acknowledged',fileName:'cdn_uat_test.xml',lastChange:'01/04/2026 09:27'},
  {id:9,selected:false,convId:'CONV-2026-00009',invoiceId:'RCT-004-0001',type:'RCT',status:'rd accepted',fileName:'rct_uat_test.xml',lastChange:'01/04/2026 09:30'},
  {id:10,selected:false,convId:'CONV-2026-00010',invoiceId:'RCT-004-0002',type:'RCT',status:'rd acknowledged',fileName:'rct_uat_test.xml',lastChange:'01/04/2026 09:31'},
  {id:11,selected:false,convId:'CONV-2026-00011',invoiceId:'INV-001-0004',type:'TIV',status:'rd accepted',fileName:'tiv_uat_test2.xml',lastChange:'02/04/2026 10:05'},
  {id:12,selected:false,convId:'CONV-2026-00012',invoiceId:'DBN-002-0003',type:'DBN',status:'rd rejected',fileName:'dbn_uat_test2.xml',lastChange:'02/04/2026 10:10'},
];
let _xmlResultIdSeq = 13;

const _xmlTypeMeta = {
  TIV:{label:'TIV',color:'var(--primary)'},
  DBN:{label:'DBN',color:'#f59e0b'},
  CDN:{label:'CDN',color:'#8b5cf6'},
  RCT:{label:'RCT',color:'#10b981'}
};
const _xmlStatuses = ['rd acknowledged','rd accepted','rd rejected'];
const _xmlStatusStyle = {
  'rd acknowledged':'background:#fef9c3;color:#713f12',
  'rd accepted':'background:#dcfce7;color:#166534',
  'rd rejected':'background:#fee2e2;color:#991b1b'
};

function simulateXMLUpload(){
  const mockNames=['etax_upload_'+new Date().getFullYear()+'.xml','rd_submission_'+Date.now()+'.xml','xml_batch_'+Math.floor(Math.random()*900+100)+'.xml'];
  const fname = mockNames[Math.floor(Math.random()*mockNames.length)];
  _runXMLUpload(fname);
}

function markXMLSingle(input){
  if(!input.files[0]) return;
  const fname = input.files[0].name;
  _runXMLUpload(fname);
}

function _runXMLUpload(fname){

  // UI: ???????????? + ???????? + ????? progress
  const nameEl   = document.getElementById('xml-single-name');
  const progWrap = document.getElementById('xml-upload-progress');
  const progBar  = document.getElementById('xml-progress-bar');
  const progLbl  = document.getElementById('xml-progress-label');
  const btn      = document.getElementById('xml-upload-btn');
  const row      = document.getElementById('xml-upload-row');

  if(nameEl){nameEl.textContent = fname; nameEl.style.color='var(--text)';}
  if(btn){btn.disabled=true; btn.textContent=currentLang==='TH'?'กำลังส่ง...':'Sending...';}
  if(row) row.style.borderColor='var(--primary)';
  if(progWrap) progWrap.style.display='block';

  // Simulate progress bar
  let pct = 0;
  const timer = setInterval(()=>{
    pct += Math.floor(Math.random()*12)+6;
    if(pct>=100) pct=100;
    if(progBar) progBar.style.width=pct+'%';
    if(progLbl) progLbl.textContent=(currentLang==='TH'?'กำลังส่ง...':'Sending...')+' '+pct+'%';
    if(pct>=100) clearInterval(timer);
  }, 120);

  // After 1.8 seconds → show result
  setTimeout(()=>{
    if(progLbl) progLbl.textContent='Sent ✓';
    if(progBar) progBar.style.background='#10b981';
    if(btn){btn.disabled=false; btn.textContent='<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload Again';}
    if(row) row.style.borderColor='#10b981';

    const now = fmtDate(new Date());
    const pad2 = n=>String(n).padStart(2,'0');
    const rdStatuses = ['rd accepted','rd acknowledged','rd rejected'];
    const allTypeMeta = [
      {type:'TIV', invPrefix:'INV'},
      {type:'DBN', invPrefix:'DBN'},
      {type:'CDN', invPrefix:'CDN'},
      {type:'RCT', invPrefix:'RCT'},
    ];

    // ????????? type ????????? accepted
    const acceptedTypes = new Set(
      xmlUploadResults.filter(r=>r.status==='rd accepted').map(r=>r.type)
    );
    const pendingTypes = allTypeMeta.filter(m=>!acceptedTypes.has(m.type));

    if(pendingTypes.length===0){
      if(progLbl) progLbl.textContent='All types passed ✓';
      if(btn){btn.disabled=false; btn.textContent='✅ All Passed'; btn.disabled=true;}
      renderXMLResults();
      showToast('XML all types passed ✅');
      return;
    }

    pendingTypes.forEach(m=>{
      const seq = _xmlResultIdSeq++;
      const invNum = pad2(Math.floor(Math.random()*89)+10);
      // ????????????????????????
      const r = Math.random();
      const status = r < 0.7 ? 'rd accepted' : r < 0.9 ? 'rd acknowledged' : 'rd rejected';
      xmlUploadResults.push({
        id: seq, selected: false,
        convId: 'CONV-'+new Date().getFullYear()+'-'+String(seq).padStart(5,'0'),
        invoiceId: m.invPrefix+'-'+invNum+'-'+String(seq).padStart(4,'0'),
        type: m.type,
        status,
        fileName: fname,
        lastChange: now
      });
    });

    renderXMLResults();
    // ??????????? render ?????????????????
    const stillPending = ['TIV','DBN','CDN','RCT'].filter(t=>
      !xmlUploadResults.some(r=>r.type===t && r.status==='rd accepted')
    );
    if(stillPending.length===0){
      showToast('XML all types passed ✅');
      if(btn){btn.textContent='✅ All Passed'; btn.disabled=true;}
    } else {
      showToast('Sent — still pending: '+stillPending.join(', '));
      if(btn){btn.disabled=false; btn.textContent='<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload Again';}
    }
  }, 1800);
}

function renderXMLResults(){
  const tbody = document.getElementById('xmlResultBody');
  if(!tbody) return;
  if(xmlUploadResults.length===0){
    tbody.innerHTML='<tr><td colspan="8" style="text-align:center;padding:18px;color:var(--text3);font-size:11px">'+i18n('emptyXMLResult')+'</td></tr>';
    return;
  }
  const meta = _xmlTypeMeta;
  const statusStyle = _xmlStatusStyle;
  tbody.innerHTML = xmlUploadResults.map(r=>`
    <tr style="border-bottom:1px solid var(--border);transition:background .12s" onmouseenter="this.style.background='var(--bg2)'" onmouseleave="this.style.background=''">
      <td style="padding:6px 8px;text-align:center"><input type="checkbox" data-xmlid="${r.id}" ${r.selected?'checked':''} onchange="toggleXMLRow(this,${r.id})"></td>
      <td style="padding:6px 8px;font-family:monospace;font-size:10px;color:var(--text2)">${r.convId}</td>
      <td style="padding:6px 8px;font-family:monospace;font-size:10px;color:var(--text2)">${r.invoiceId}</td>
      <td style="padding:6px 8px;text-align:center"><span style="background:${meta[r.type]?.color||'#888'};color:#fff;border-radius:4px;padding:1px 6px;font-size:10px;font-weight:700">${r.type}</span></td>
      <td style="padding:6px 8px"><span style="border-radius:4px;padding:2px 7px;font-size:10px;font-weight:600;${statusStyle[r.status]||''}">${r.status}</span></td>
      <td style="padding:6px 8px;text-align:center"><button class="btn btn-ghost btn-sm" style="font-size:10px;padding:2px 8px" onclick="downloadXMLResponse(${r.id})"><svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download</button></td>
      <td style="padding:6px 8px;font-size:10px;color:var(--text3);white-space:nowrap">${r.lastChange}</td>
      <td style="padding:6px 8px;text-align:center"><button class="btn btn-ghost btn-sm" style="font-size:10px;padding:2px 8px" onclick="viewXMLResult(${r.id})"><svg class="si si-sm" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View</button></td>
    </tr>`).join('');
}

function toggleXMLRow(cb, id){
  const r = xmlUploadResults.find(x=>x.id===id);
  if(r) r.selected = cb.checked;
  _updateXMLExportBtn();
}

function toggleSelectAllXML(cb){
  xmlUploadResults.forEach(r=>r.selected=cb.checked);
  renderXMLResults();
  _updateXMLExportBtn();
}

function _updateXMLExportBtn(){
  const btn = document.getElementById('xmlExportBtn');
  if(!btn) return;
  const n = xmlUploadResults.filter(r=>r.selected).length;
  btn.textContent = n ? `<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Export (${n})` : '<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Export';
  btn.style.background = n ? 'var(--primary-dim)' : '';
  btn.style.color = n ? 'var(--primary)' : '';
  btn.style.fontWeight = n ? '700' : '';
}

function refreshXMLResults(){
  xmlUploadResults.forEach(r=>{
    if(r.status==='rd acknowledged') r.status=Math.random()>0.4?'rd accepted':'rd rejected';
    r.lastChange=fmtDate(new Date());
  });
  renderXMLResults();
  showToast(i18n('toastRefreshed'));
}

function exportXMLResults(){
  if(xmlUploadResults.length===0){showToast(i18n('toastNoExport'),'warn');return;}
  const selected=xmlUploadResults.filter(r=>r.selected);
  const data=selected.length?selected:xmlUploadResults;
  const rows=[['Conversation ID','Invoice ID','Type','Status','File Name','Last Status Change']];
  data.forEach(r=>rows.push([r.convId,r.invoiceId,r.type,r.status,r.fileName,r.lastChange]));
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(rows),'XML Results');
  XLSX.writeFile(wb,`XML_Upload_Results${selected.length?`_selected_${selected.length}`:''}.xlsx`);
  showToast(selected.length?`Export ${selected.length} records selected`:'Export all '+data.length+' records');
}

function downloadXMLResponse(id){
  showToast(i18n('toastDownload'));
}

function viewXMLResult(id){
  const r=xmlUploadResults.find(x=>x.id===id);
  if(!r) return;
  showToast(`${r.convId} | ${r.invoiceId} | ${r.type} | ${r.status}`);
}

function triggerXML(type){ document.getElementById('xml'+type.toUpperCase()).click(); }
function markXML(input, checkId){
  const el = document.getElementById(checkId);
  if(input.files[0]) el.textContent = '? ' + input.files[0].name;
}

// stale renderCPAs removed — using wizard-aware version above

const _cpaAllNoteIds=['cpaUATNote','cpaXMLNote','cpaPRODNote'];

function syncCPANote(src){
  _cpaAllNoteIds.forEach(id=>{
    if(id===src.id)return;
    const el=document.getElementById(id);
    if(el)el.value=src.value;
  });
}

function editStep(step){
  const noteMap={2:'cpaUATNote',3:'cpaXMLNote',4:'cpaPRODNote'};
  const el=document.getElementById(noteMap[step]);
  if(el){el.removeAttribute('readonly');el.classList.remove('input-readonly');el.focus();}
  if(step===2){
    ['cpaUATPath'].forEach(id=>{const e=document.getElementById(id);if(e){e.removeAttribute('readonly');e.classList.remove('input-readonly');}});
    document.getElementById('cpaUATLocation')?.removeAttribute('disabled');
  }
  if(step===4){
    ['cpaPRODPath'].forEach(id=>{const e=document.getElementById(id);if(e){e.removeAttribute('readonly');e.classList.remove('input-readonly');}});
    document.getElementById('cpaPRODLocation')?.removeAttribute('disabled');
  }
  // toggle: ???? Edit ? ???? Save
  const eb=document.getElementById('editBtn'+step);
  const sb=document.getElementById('saveBtn'+step);
  if(eb) eb.style.display='none';
  if(sb) sb.style.display='';
}

function saveStep(step){
  const stepNames={2:'UAT',3:'Upload XML',4:'PROD'};
  const noteMap={2:'cpaUATNote',3:'cpaXMLNote',4:'cpaPRODNote'};
  const el=document.getElementById(noteMap[step]);
  if(el){
    const val=el.value;
    _cpaAllNoteIds.forEach(id=>{
      const t=document.getElementById(id);
      if(t){t.value=val;t.setAttribute('readonly','');t.classList.add('input-readonly');}
    });
    const rec=cpas.find(x=>x.id===currentWizardCPAId);
    if(rec){rec.cpaNote=val;rec.updated=fmtDate(new Date());}
  }
  // toggle: ???? Save ? ???? Edit
  const eb=document.getElementById('editBtn'+step);
  const sb=document.getElementById('saveBtn'+step);
  if(sb) sb.style.display='none';
  if(eb) eb.style.display='';
  showToast(`Saved note for ${stepNames[step]||''} successfully ✅`);
}

// (old h2h export stubs removed — use exportDailyReport / exportMonthlyReport instead)



// --- CPA WORKFLOW HELPERS ---------------------------

// Continue from an existing CPA row to next wizard step
function continueWizard(id, toStep){
  const cr = cpas.find(x=>x.id===id); if(!cr)return;
  currentWizardCPAId = id;
  clearRowHighlight();
  // Pre-fill wizard fields from existing record
  const apptSel = document.getElementById('cpaApptCompany');
  if(apptSel){
    // Ensure option exists
    const exists=[...apptSel.options].some(o=>o.value===cr.company);
    if(!exists){const opt=document.createElement('option');opt.value=cr.company;opt.textContent=cr.company;apptSel.appendChild(opt);}
    apptSel.value = cr.company;
  }
  document.getElementById('cpaUATCompany').value  = cr.company;
  document.getElementById('cpaPRODCompany').value = cr.company;
  document.getElementById('cpaUATLocation').value  = cr.uatLocation||'';
  document.getElementById('cpaPRODLocation').value = cr.prodLocation||'';
  // ???? note ??? record ??? ??????? readonly
  // ???? note ?????????????? step ??????? readonly
  _cpaAllNoteIds.forEach(id=>{
    const el=document.getElementById(id);
    if(el){el.value=cr.cpaNote||'';el.setAttribute('readonly','');el.classList.add('input-readonly');}
  });
  // Reset XML uploads
  const snEl2=document.getElementById('xml-single-name');
  if(snEl2){snEl2.textContent='— (.xml)';snEl2.style.color='';}
  const snBtn2=document.getElementById('xml-upload-btn'); if(snBtn2){snBtn2.disabled=false;snBtn2.textContent='<svg class="si si-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg> Upload';}
  const snProg2=document.getElementById('xml-upload-progress'); if(snProg2)snProg2.style.display='none';
  const snBar2=document.getElementById('xml-progress-bar'); if(snBar2){snBar2.style.width='0%';snBar2.style.background='var(--primary)';}
  const snRow2=document.getElementById('xml-upload-row'); if(snRow2)snRow2.style.borderColor='';
  xmlUploadResults=[];
  renderXMLResults();
  _showCPAStep(toStep);
  openModal('overlayRegisterCPA');
}

// Simulate XML test result (for demo purposes)
function simulateXMLResult(id){
  const cr = cpas.find(x=>x.id===id); if(!cr)return;
  // 70% chance success
  cr.xmlStatus = Math.random() > 0.3 ? 'Verified' : 'Invalid';
  if(cr.xmlStatus==='Verified')
    showToast(`XML Test Passed — ${cr.company} ✓`,'success');
  else
    showToast(`XML Test Failed — ${cr.company}. Click Edit Information`,'danger');
  renderCPAs();
}

// XML error popup for Invalid status
let xmlErrorCPAId = null;
// Deterministic error scenarios keyed by company name
const _xmlErrorScenarios = {
  'Indorama Ventures': {
    type:'TIV', box:'xmlErrTIV',
    headline:'TIV — TaxpayerID Mismatch',
    detail:'TaxpayerID "0107556000298" does not match Revenue Department database — please verify the 13-digit taxpayer ID'
  }
};
const _defaultXmlError = {
  type:'TIV', box:'xmlErrTIV',
  headline:'TIV — XML Schema Validation Failed',
  detail:'Error in element <TaxInvoiceDate>: Invalid date format — must be YYYY-MM-DD'
};

function openXMLErrorPopup(id){
  xmlErrorCPAId = id;
  clearRowHighlight();
  const cr = cpas.find(x=>x.id===id); if(!cr)return;
  openModal('overlayXMLError');
  document.getElementById('xmlErrCompany').textContent = cr.company;

  const scenario = _xmlErrorScenarios[cr.company] || _defaultXmlError;

  // Reset all boxes
  ['xmlErrTIV','xmlErrDBN','xmlErrCDN','xmlErrRCT'].forEach(bid=>{
    const el=document.getElementById(bid);
    el.style.border='2px dashed var(--border2)';
    el.style.background='';
  });

  // Highlight the failing box
  const errBox = document.getElementById(scenario.box);
  if(errBox){ errBox.style.border='2px solid var(--danger)'; errBox.style.background='#fff5f5'; }

  // Show error message
  const msgEl = document.getElementById('xmlErrMsg');
  msgEl.innerHTML = `<span style="font-weight:700;color:var(--danger)">? ${scenario.headline}</span><br><span style="color:#7f1d1d;margin-top:4px;display:block">${scenario.detail}</span>`;

  // Add red asterisk label to the failing type header
  document.querySelectorAll('.xml-err-label').forEach(el=>el.textContent='');
  const labelEl = document.getElementById('xmlErrLabel_'+scenario.type);
  if(labelEl) labelEl.innerHTML = ' <span style="color:var(--danger);font-weight:800">*</span>';
}

function resubmitXML(){
  const cr = cpas.find(x=>x.id===xmlErrorCPAId); if(!cr)return;
  closeModal('overlayXMLError');
  // 70% success on resubmit
  cr.xmlStatus = Math.random() > 0.3 ? 'Verified' : 'Invalid';
  cr.updated = fmtDate(new Date());
  renderCPAs();
  buildNotifications();
  if(cr.xmlStatus==='Verified')
    showToast(`✅ XML Resubmit Success! ${cr.company} — Status: Verified`,'success');
  else {
    showToast(`❌ Resubmit Failed Again — Click Edit Information to fix`,'danger');
    // Re-open error popup after short delay to show loop
    setTimeout(()=>openXMLErrorPopup(cr.id), 600);
  }
}


// --- ROW HIGHLIGHT for notifications ---------------
let _highlightTarget = null; // {page, id, type}

function highlightRow(page, id, type){
  // navigate to the correct page, then find and highlight the row
  _highlightTarget = {page, id, type};
  navigate(page);
  // Wait for render, then scroll + blink
  setTimeout(()=>{
    const row = document.querySelector(`tr[data-row-id="${id}"][data-row-type="${type}"]`);
    if(!row){ // row may be on a different page — find and go to it
      _ensureRowVisible(page, id, type);
      return;
    }
    _activateRowBlink(row);
  }, 250);
}

function _ensureRowVisible(page, id, type){
  // Find which pager page contains this row
  const key = page==='cpa'?'cpas':page==='company'?'companies':'apps';
  const p = pagers[key]; if(!p) return;
  const idx = p.data.findIndex(x=>x.id===id);
  if(idx===-1) return;
  const targetPage = Math.floor(idx/p.perPage)+1;
  if(p.page!==targetPage){ goPage(key, targetPage); }
  setTimeout(()=>{
    const row = document.querySelector(`tr[data-row-id="${id}"][data-row-type="${type}"]`);
    if(row) _activateRowBlink(row);
  }, 200);
}

function _activateRowBlink(row){
  // Remove any existing blinks
  document.querySelectorAll('tr.row-alert').forEach(r=>r.classList.remove('row-alert'));
  row.classList.add('row-alert');
  // Scroll into view
  row.scrollIntoView({behavior:'smooth', block:'center'});
  // Store ref for clearance
  _highlightTarget = _highlightTarget||{};
  _highlightTarget.row = row;
}

function clearRowHighlight(){
  document.querySelectorAll('tr.row-alert').forEach(r=>r.classList.remove('row-alert'));
  _highlightTarget = null;
}

// -------------------------------------------------------
//  INIT PAGERS + START
// -------------------------------------------------------
initPager('apps','appPag',10);
initPager('companies','compPag',10);
initPager('cpas','cpaPag',10);

buildNotifications();

        function submitXMLTest() {
            const XML_TYPES = ['TIV','DBN','CDN','RCT'];
            const typeColors = {TIV:'#1d4ed8',DBN:'#d97706',CDN:'#7c3aed',RCT:'#0891b2'};

            // ??????????????? type ?? 'rd accepted' ????????? 1 ??????
            const statusMap = {};
            XML_TYPES.forEach(t => {
                const accepted = xmlUploadResults.some(r => r.type === t && r.status === 'rd accepted');
                statusMap[t] = accepted;
            });

            const failed = XML_TYPES.filter(t => !statusMap[t]);
            if(failed.length > 0){
                // ???? warning modal ???????????????
                const list = document.getElementById('xmlWarningList');
                list.innerHTML = XML_TYPES.map(t => {
                    const ok = statusMap[t];
                    const rows = xmlUploadResults.filter(r => r.type === t);
                    const latestStatus = rows.length ? rows[rows.length-1].status : 'No file';
                    return `<div style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:7px;border:1px solid ${ok?'rgba(5,122,85,.2)':'rgba(224,36,36,.2)'};background:${ok?'rgba(5,122,85,.05)':'rgba(224,36,36,.04)'}">
                        <span style="width:36px;text-align:center;font-size:11px;font-weight:700;padding:2px 0;border-radius:4px;color:#fff;background:${typeColors[t]};flex-shrink:0">${t}</span>
                        <span style="flex:1;font-size:12.5px;color:var(--text2)">${ok ? 'Passed' : (rows.length ? `Latest status: ${latestStatus}` : 'Not yet uploaded')}</span>
                        <span style="font-size:16px">${ok ? '✓' : '✗'}</span>
                    </div>`;
                }).join('');
                openModal('overlayXMLWarning');
                return;
            }

            // ??????? type — ????????????
            const rec = cpas.find(x => x.id === currentWizardCPAId);
            if (rec) {
                rec.wizardStep = 3;
                rec.xmlStatus = 'Pending';
                rec.updated = fmtDate(new Date());
            }
            renderCPAs();
            buildNotifications();
            closeModal('overlayRegisterCPA');
            showToast('XML test submitted — status set to "Step 3: Testing Pending"');
        }

        function triggerXML(type) {
            const el = document.getElementById('xml' + type.toUpperCase());
            if (el) el.click();
        }

        function triggerXMLEdit(type) {
            const el = document.getElementById('xml' + type + 'edit');
            if (el) el.click();
        }

        function markXMLEdit(input, checkId) {
            const el = document.getElementById(checkId);
            if (input.files[0] && el) el.textContent = '? ' + input.files[0].name;
        }

        // -- DARK MODE --
        function _applyDarkIcon(isDark) {
            const moon = document.getElementById('iconMoon');
            const sun  = document.getElementById('iconSun');
            if (!moon || !sun) return;
            moon.style.display = isDark ? 'none'  : 'block';
            sun.style.display  = isDark ? 'block' : 'none';
        }
        function toggleDarkMode(){
            const html = document.documentElement;
            const isDark = html.getAttribute('data-theme') === 'dark';
            html.setAttribute('data-theme', isDark ? 'light' : 'dark');
            _applyDarkIcon(!isDark);
            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        }
        // restore theme from localStorage
        (function(){
            const saved = localStorage.getItem('theme') ||
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', saved);
            _applyDarkIcon(saved === 'dark');
        })();

        // -- SIDEBAR MOBILE --
        function openSidebar(){
            document.getElementById('mainSidebar').classList.add('mobile-open');
            document.getElementById('sidebarOverlay').classList.add('open');
        }
        function closeSidebar(){
            document.getElementById('mainSidebar').classList.remove('mobile-open');
            document.getElementById('sidebarOverlay').classList.remove('open');
        }
        // ??? sidebar ???????????????? nav item ?? mobile
        document.querySelectorAll('.nav-item').forEach(el=>{
            el.addEventListener('click', ()=>{
                if(window.innerWidth <= 768) closeSidebar();
            });
        });

// -------------------------------------------------------
//  EVENT DELEGATION — BAFS2 REPORT ACTIONS
// -------------------------------------------------------
document.addEventListener('click', function(e) {
  var btn = e.target.closest('[data-action]');
  if (!btn) return;
  var action = btn.dataset.action;

  // Modal close
  if (action === 'closeModal') { var mid=btn.dataset.modal; if(mid) closeModal(mid); return; }

  // Export
  if (action === 'exportDailyReport') { exportDailyReport(); return; }
  if (action === 'exportMonthlyReport') { exportMonthlyReport(); return; }
  if (action === 'exportStatusReport') { exportStatusReport(); return; }

  // Filter
  if (action === 'filterDailyReport') { filterDailyReport(); return; }
  if (action === 'resetDailyFilter') { resetDailyFilter(); return; }
  if (action === 'filterMonthlyReport') { filterMonthlyReport(); return; }
  if (action === 'resetMonthlyFilter') { resetMonthlyFilter(); return; }
  if (action === 'filterStatusReport') { filterStatusReport(); return; }
  if (action === 'resetStatusFilter') { resetStatusFilter(); return; }

  // Column dropdowns
  if (action === 'toggleDailyColumnsDropdown') { toggleDailyColumnsDropdown(); return; }
  if (action === 'toggleMonthlyColumnsDropdown') { toggleMonthlyColumnsDropdown(); return; }
  if (action === 'toggleStatusColumnsDropdown') { toggleStatusColumnsDropdown(); return; }

  // Status filter shortcuts
  if (action === 'setDailyStatusFilter') { setDailyStatusFilter(btn.dataset.status); return; }
  if (action === 'resetDailyStatusFilter') { resetDailyStatusFilter(); return; }
  if (action === 'setStatusStatusFilter') { setStatusStatusFilter(btn.dataset.status); return; }
  if (action === 'resetStatusStatusFilter') { resetStatusStatusFilter(); return; }
  if (action === 'filterMonthlyByStatusQuick') { filterMonthlyByStatusQuick(btn.dataset.type); return; }

  // Pagination
  if (action === 'goDailyPage') { goDailyPage(parseInt(btn.dataset.page)); return; }
  if (action === 'goMonthlyPage') { goMonthlyPage(parseInt(btn.dataset.page)); return; }
  if (action === 'goStatusPage') { goStatusPage(parseInt(btn.dataset.page)); return; }

  // Row actions
  if (action === 'openRDDetailDirect') { openRDDetailDirect(btn.dataset.conv); return; }
  if (action === 'openStatusHistory') { openStatusHistory(btn.dataset.conv); return; }
  if (action === 'openAppModal') { openAppModal(parseInt(btn.dataset.idx)); return; }
  if (action === 'goToDailyReportFromMonthlyDirect') { goToDailyReportFromMonthlyDirect(parseInt(btn.dataset.year), parseInt(btn.dataset.month), parseInt(btn.dataset.day)); return; }

  // Code tab
  if (action === 'switchCodeTab') { switchCodeTab(btn.dataset.tab); return; }
});

// Close column dropdowns when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(function(d) { d.style.display='none'; });
  }
});

// -------------------------------------------------------
//  LANGUAGE TOGGLE
// -------------------------------------------------------
var currentLang = localStorage.getItem('lang') || 'TH';

// -- i18n helper -----------------------------------------
function i18n(key) { return (translations[currentLang] || {})[key] || key; }

var translations = {
  TH: {
    // Page subtitles
    subtitleApp:     'จัดการ Application การส่งข้อมูล',
    subtitleComp:    'จัดการข้อมูลบริษัท',
    subtitleCPA:     'จัดการ CPA Certificate สำหรับ e-Tax Invoice',
    subtitleStatus:  'รายงานสถานะเอกสารและการตอบกลับจากกรมสรรพากร (ราย Transaction)',
    subtitleDaily:   'รายงานการส่งข้อมูลให้กรมสรรพากร (จัดกลุ่มตามรอบเวลา)',
    subtitleMonthly: 'รายงานสรุปการส่งข้อมูลให้กรมสรรพากร (รายเดือน)',
    // Notification panel
    notifTitle:  'การแจ้งเตือน',
    markAllRead: 'อ่านทั้งหมด',
    // Labels
    labelDate:   'วันที่ (Date)',
    labelYear:   'ปี (Year)',
    labelMonth:  'เดือน (Month)',
    labelTaxId:  'Tax ID (13 หลัก)',
    labelNote:   'หมายเหตุ',
    labelApptDate: 'วันที่นัดหมาย (ข้อมูลอ้างอิง)',
    // Pagination
    pagShow:  'แสดง',
    pagItems: 'รายการ',
    optAll:   'ทั้งหมด',
    langBtn:  'EN',
    // Loading
    loadingText: 'กำลังทำงาน...',
    // Button titles
    titleMenu:  'เมนู',
    titleTheme: 'เปลี่ยน Theme',
    titleLang:  'เปลี่ยนภาษา / Change Language',
    titleNotif: 'การแจ้งเตือน',
    titleHome:  'กลับหน้าหลัก',
    // Buttons
    btnCancel:      'ยกเลิก',
    btnConfirm:     'ยืนยัน',
    btnClose:       'ปิด',
    btnChooseFile:  '📂 เลือกไฟล์',
    btnAcknowledge: 'รับทราบ',
    // Export modal
    exportGenTitle: 'กำลัง Export...',
    exportGenSub:   'โปรดรอสักครู่',
    // App modal title (default)
    appModalTitleDefault: '📑 รายละเอียดบริษัท',
    // Company list note in app detail
    compLinkedNote:   'แสดงเฉพาะ Company ที่ผูกกับ Application นี้',
    compUnlinkedNote: 'แสดงเฉพาะ Company ที่ยังไม่ได้ผูกกับ Application ใด',
    assignSelectPrefix: 'เลือก Company ที่ต้องการผูกกับ',
    assignNoData:       'ไม่มี Company ที่สามารถ Assign ได้',
    // Create forms placeholders
    phAppName:  'เช่น AOT SmartTax',
    phCompName: 'เช่น EXATHQ',
    phCPAPath:  'เช่น /certs/company.p12 หรือ https://host/cpa',
    phUATPath:  'เช่น /certs/uat/company_uat.xml',
    phPRODPath: 'เช่น /certs/prod/company_prod.xml',
    phApptDate: 'วันที่นัดหมายกับ RD',
    phNote:     'หมายเหตุ...',
    phInvoiceSearch: 'เช่น TIV...',
    labelCPAPath: '(Certificate File Path หรือ Endpoint URL)',
    // overlayCreateCPA wizard step labels
    wizTitle1:  'นัดหมายกับ RD',
    wizLabel1:  'นัดหมาย RD',
    // CPA info box
    cpaTitleRequest: 'ขอ CPA Certificate จากกรมสรรพากร',
    cpaDescRequest:  'ก่อนเริ่มใช้งานระบบ Host to Host กับกรมสรรพากร ผู้ประกอบการต้องยื่นเรื่องขอรับ CPA Certificate (Client Certificate) เพื่อพิสูจน์ตัวตนในการส่งข้อมูลอิเล็กทรอนิกส์',
    cpaStep1Title: 'ยื่นหนังสือแจ้งความประสงค์',
    cpaStep1Desc:  'ติดต่อกองบริหารการเสียภาษีทางอิเล็กทรอนิกส์ กรมสรรพากร ชั้น 21 อาคารกรมสรรพากร<br> 📞 โทร. <strong>02 272 9771</strong> หรือ <a href="https://etax.rd.go.th" target="_blank" style="color:var(--primary)">etax.rd.go.th</a>',
    cpaStep2Title: 'เตรียมเอกสารที่ต้องใช้',
    cpaDoc1: '📄 หนังสือแจ้งความประสงค์ขอเชื่อมต่อระบบ Host to Host (บ.อ.01)',
    cpaDoc2: '📄 สำเนาหนังสือรับรองบริษัท (ไม่เกิน 6 เดือน)',
    cpaDoc3: '📄 สำเนาบัตรประชาชนผู้มีอำนาจลงนาม',
    cpaDoc4: '📄 ข้อมูล IP Address และ Endpoint ของระบบ',
    cpaDoc5: '📄 SSL Certificate ของ Server',
    cpaStep3Title: 'รอผลการพิจารณา',
    cpaStep3Desc:  'กรมสรรพากรจะพิจารณาคุณสมบัติและแจ้งผลทางอีเมลที่ลงทะเบียนไว้ภายใน <strong>5–10 วันทำการ</strong><br> เมื่อผ่านการพิจารณา กรมสรรพากรจะออก CPA (UAT) ให้เพื่อทดสอบการส่งข้อมูล',
    cpaStep4Title: 'ดาวน์โหลด CPA (UAT) และตั้งค่าระบบ',
    cpaStep4Desc:  'ดาวน์โหลด CPA Certificate สำหรับทดสอบจากอีเมลที่กรมสรรพากรส่งให้ นำไป Register ในระบบเพื่อเริ่มทดสอบส่งข้อมูล 4 ประเภท ได้แก่ TIV, DBN, CDN, RCT',
    cpaNextNote:   'หลังจากได้รับ CPA (UAT) จากกรมสรรพากรแล้ว กด <strong>"Next"</strong> เพื่อไปยังขั้นตอน Register CPA เข้าระบบ และเริ่มทดสอบการส่งข้อมูล',
    cpaStep2Header: '<span style="font-size:15px">✅</span> ได้รับ CPA (UAT) จากกรมสรรพากรแล้ว กรอกข้อมูลด้านล่างเพื่อ Register เข้าระบบ',
    // XML Test (overlayCreateCPA step 3)
    cpaXMLTestTitle: 'ทดสอบการส่ง XML ให้กรมสรรพากร',
    cpaXMLTestDesc:  'อัปโหลดไฟล์ XML ทดสอบ 4 ประเภทที่กรมสรรพากรกำหนด เพื่อยืนยันว่าระบบสามารถส่งข้อมูล e-Tax Invoice ได้ถูกต้อง',
    xmlTIVName: 'Tax Invoice / ใบกำกับภาษี',
    xmlTIVDesc: 'ไฟล์ XML ใบกำกับภาษีสำหรับทดสอบ',
    xmlDBNName: 'Debit Note / ใบเพิ่มหนี้',
    xmlDBNDesc: 'ไฟล์ XML ใบเพิ่มหนี้สำหรับทดสอบ',
    xmlCDNName: 'Credit Note / ใบลดหนี้',
    xmlCDNDesc: 'ไฟล์ XML ใบลดหนี้สำหรับทดสอบ',
    xmlRCTName: 'Receipt / ใบรับ',
    xmlRCTDesc: 'ไฟล์ XML ใบรับสำหรับทดสอบ',
    cpaConfirmNote: 'กด <strong>Confirm Upload</strong> เพื่อบันทึก CPA ลงในระบบ — ไม่จำเป็นต้องอัปโหลดครบทุกประเภทก็ได้ สามารถเพิ่มภายหลังได้',
    // overlayRegisterCPA step 1
    regStep1Title: '📌 ขั้นตอนการขอ CPA กับกรมสรรพากร (Host to Host)',
    regStep1_1: 'ยื่นหนังสือแจ้งความประสงค์ขอเชื่อมต่อระบบ Host to Host ที่กองบริหารการเสียภาษีทางอิเล็กทรอนิกส์ ชั้น 21',
    regStep1_2: 'กรมสรรพากรพิจารณาคุณสมบัติและแจ้งผลทางอีเมล (บ.อ.01)',
    regStep1_3: 'บันทึก IP Address, Endpoint, SSL Certificate ที่ <strong>https://etax.rd.go.th</strong>',
    regStep1_4: 'รับอีเมล CPA ทดสอบ (UAT) จากกรมสรรพากรพร้อมรหัสนำส่ง เพื่อทดสอบการส่ง XML ทั้ง 4 ประเภท',
    regStep1_5: 'เมื่อผ่านการทดสอบ รับ CPA Production จากกรมสรรพากรและเริ่ม GO LIVE',
    regDocHint: '💡 <strong>เตรียมเอกสาร:</strong> หนังสือรับรองบริษัท, บัตรประชาชนผู้มีอำนาจ, ตราประทับบริษัท, ใบ ภ.พ.01 และข้อมูลระบบ IT',
    // step 2 UAT
    regUATHeader: '🧪 <strong>UAT Environment</strong> — กรอกข้อมูล CPA สำหรับทดสอบที่ได้รับจากกรมสรรพากร',
    // step 3 XML
    regUATDone:    '✅ <strong>Register UAT สำเร็จ!</strong> — ทดสอบส่ง XML ทั้ง 4 ประเภทให้ครบก่อนดำเนินการต่อ',
    reg4XMLTypes:  '📋 XML ที่ต้องส่งทดสอบ 4 ประเภท',
    xmlTIVFull:    'Tax Invoice / ใบกำกับภาษีอิเล็กทรอนิกส์',
    xmlDBNFull:    'Debit Note / ใบเพิ่มหนี้อิเล็กทรอนิกส์',
    xmlCDNFull:    'Credit Note / ใบลดหนี้อิเล็กทรอนิกส์',
    xmlRCTFull:    'Receipt / ใบรับอิเล็กทรอนิกส์',
    uploadXMLTitle: 'อัปโหลดไฟล์ XML',
    noFileSelected: 'ยังไม่ได้เลือกไฟล์ (.xml)',
    xmlResultTitle: 'ผลการส่ง XML',
    xmlNoResult:    'ยังไม่มีข้อมูล — อัปโหลดไฟล์และกด Submit เพื่อดูผล',
    // step 4 PROD
    regPRODHeader: '🚀 <strong>PRODUCTION Environment</strong> — CPA สำหรับใช้งานจริง กรุณาตรวจสอบข้อมูลให้ถูกต้อง',
    // overlayXMLWarning
    xmlWarnTitle:      'ไม่สามารถ Submit ได้',
    xmlWarnDesc:       'ไฟล์ XML ต้องผ่านการ Accepted จาก RD ครบทั้ง 4 ประเภท',
    xmlWarnFileStatus: 'สถานะไฟล์แต่ละประเภท',
    // overlayXMLError
    xmlErrSubtitle:    'กรุณาตรวจสอบและแก้ไขข้อมูลที่มีปัญหา',
    xmlErrUploadLabel: '📁 อัปโหลด XML ที่แก้ไขแล้ว (กล่องสีแดง = มีข้อผิดพลาด)',
    docTIVTH: 'ใบกำกับภาษี',
    docDBNTH: 'ใบเพิ่มหนี้',
    docCDNTH: 'ใบลดหนี้',
    docRCTTH: 'ใบรับ',
    xmlErrHint: '💡 อัปโหลดเฉพาะไฟล์ที่มีข้อผิดพลาด (กล่องสีแดง) หรืออัปโหลดทุกไฟล์ใหม่ก็ได้',
    // Toast / dynamic messages
    toastFillAll:     'กรุณากรอกข้อมูลให้ครบ',
    toastTaxId13:     'Tax ID ต้องมี 13 หลัก',
    toastSelectComp:  'กรุณาเลือก Company',
    toastFillHost:    'กรุณากรอก Host',
    toastFillAllFields: 'กรุณากรอกข้อมูลให้ครบ',
    toastCopied:      'คัดลอก Token แล้ว',
    toastTokenDel:    'ลบ Token แล้ว',
    toastNotifNone:   'ไม่มีการแจ้งเตือน ✓',
    toastNoData:      'ไม่พบข้อมูลเอกสารนี้',
    toastRefreshed:   'รีเฟรชข้อมูลแล้ว',
    toastNoExport:    'ไม่มีข้อมูลให้ Export',
    toastDownload:    'กำลังดาวน์โหลด Response...',
    // Table empty rows
    emptyApp:     'ไม่พบข้อมูล Application',
    emptyComp:    'ไม่พบข้อมูล Company',
    emptyCPA:     'ไม่พบข้อมูล CPA',
    emptyGeneral: 'ไม่พบข้อมูล',
    emptyNoAppComp: 'ยังไม่มี Company ที่ผูกกับ Application นี้',
    emptyToken:   'ยังไม่มี Token — กด Generate Token เพื่อสร้าง',
    emptyDaily:   'ไม่พบข้อมูลการส่งในวันที่เลือก หรือ กดค้นหา',
    emptyMonthly: 'ไม่พบข้อมูล หรือ กดค้นหาใหม่',
    emptyStatus:  'ไม่พบข้อมูล หรือ กดค้นหาใหม่',
    emptyXMLResult: 'ยังไม่มีข้อมูล — อัปโหลดไฟล์และกด Submit เพื่อดูผล',
    noDataOption: 'ไม่มีข้อมูล',
    // Pagination units
    unitRecords: 'รายการ',
    // Stat cards sub-labels
    statSubRecords: 'รายการ',
    statSubSuccess: 'สำเร็จ',
    statSubFailed:  'ล้มเหลว',
    statSubRate:    'อัตราสำเร็จ',
    statSubTotal:   'เอกสารทั้งหมด (คลิกเพื่อคืนค่า)',
    statSubAwaiting:'รับเข้าระบบ (คลิกเพื่อกรอง)',
    statSubAccepted:'ผ่านตรวจสอบ (คลิกเพื่อกรอง)',
    statSubRejected:'ถูกปฏิเสธ (คลิกเพื่อกรอง)',
    statSubAwaitingNoFilter: 'รับเข้าระบบ',
    statSubAcceptedNoFilter: 'ผ่านตรวจสอบ',
    statSubRejectedNoFilter: 'ถูกปฏิเสธ',
    statSubClickReset: 'คลิกเพื่อคืนค่า',
    // Confirm status modal
    statusActivate:   'เปิดใช้งาน',
    statusDeactivate: 'ปิดใช้งาน',
    // Pagination navigation
    pagPrev: 'ก่อนหน้า',
    pagNext: 'ถัดไป',
    pagShowRange: 'แสดง',
    pagFrom: 'จาก',
  },
  EN: {
    // Page subtitles
    subtitleApp:     'Manage data transmission applications',
    subtitleComp:    'Manage company information',
    subtitleCPA:     'Manage CPA Certificates for e-Tax Invoice',
    subtitleStatus:  'Document status and RD response report (per transaction)',
    subtitleDaily:   'Data submission report to RD (grouped by time period)',
    subtitleMonthly: 'Monthly data submission summary report to RD',
    // Notification panel
    notifTitle:  'Notifications',
    markAllRead: 'Mark all read',
    // Labels
    labelDate:   'Date',
    labelYear:   'Year',
    labelMonth:  'Month',
    labelTaxId:  'Tax ID (13 digits)',
    labelNote:   'Note',
    labelApptDate: 'Appointment Date (Reference)',
    // Pagination
    pagShow:  'Show',
    pagItems: 'items',
    optAll:   'All',
    langBtn:  'TH',
    // Loading
    loadingText: 'Processing...',
    // Button titles
    titleMenu:  'Menu',
    titleTheme: 'Change Theme',
    titleLang:  'Change Language / เปลี่ยนภาษา',
    titleNotif: 'Notifications',
    titleHome:  'Back to Home',
    // Buttons
    btnCancel:      'Cancel',
    btnConfirm:     'Confirm',
    btnClose:       'Close',
    btnChooseFile:  '📂 Choose File',
    btnAcknowledge: 'Acknowledge',
    // Export modal
    exportGenTitle: 'Exporting...',
    exportGenSub:   'Please wait',
    // App modal title (default)
    appModalTitleDefault: '📑 Company Detail',
    // Company list notes
    compLinkedNote:   'Showing only companies linked to this application',
    compUnlinkedNote: 'Showing only companies not yet linked to any application',
    assignSelectPrefix: 'Select company to link with',
    assignNoData:       'No companies available to assign',
    // Create forms placeholders
    phAppName:  'e.g. AOT SmartTax',
    phCompName: 'e.g. EXATHQ',
    phCPAPath:  'e.g. /certs/company.p12 or https://host/cpa',
    phUATPath:  'e.g. /certs/uat/company_uat.xml',
    phPRODPath: 'e.g. /certs/prod/company_prod.xml',
    phApptDate: 'Appointment date with RD',
    phNote:     'Note...',
    phInvoiceSearch: 'e.g. TIV...',
    labelCPAPath: '(Certificate File Path or Endpoint URL)',
    // overlayCreateCPA wizard step labels
    wizTitle1:  'RD Appointment',
    wizLabel1:  'RD Appointment',
    // CPA info box
    cpaTitleRequest: 'Request CPA Certificate from Revenue Department',
    cpaDescRequest:  'Before using the Host to Host system with the Revenue Department, operators must submit a request for a CPA Certificate (Client Certificate) to authenticate electronic data transmissions.',
    cpaStep1Title: 'Submit Letter of Intent',
    cpaStep1Desc:  'Contact the Electronic Tax Administration Division, Revenue Department, 21st Floor, Revenue Department Building<br> ?? Tel. <strong>02 272 9771</strong> or <a href="https://etax.rd.go.th" target="_blank" style="color:var(--primary)">etax.rd.go.th</a>',
    cpaStep2Title: 'Prepare Required Documents',
    cpaDoc1: '📄 Letter of Intent for Host to Host Connection (B.O.01)',
    cpaDoc2: '📄 Company Registration Certificate (not older than 6 months)',
    cpaDoc3: '📄 Copy of authorized signatory\'s ID card',
    cpaDoc4: '📄 IP Address and System Endpoint information',
    cpaDoc5: '📄 Server SSL Certificate',
    cpaStep3Title: 'Await Review Result',
    cpaStep3Desc:  'The Revenue Department will review qualifications and notify via registered email within <strong>5-10 business days</strong><br> Upon approval, RD will issue a CPA (UAT) for testing data transmission.',
    cpaStep4Title: 'Download CPA (UAT) and Configure System',
    cpaStep4Desc:  'Download the CPA Certificate for testing from the email sent by RD, then register it in the system to begin testing 4 document types: TIV, DBN, CDN, RCT.',
    cpaNextNote:   'After receiving the CPA (UAT) from RD, click <strong>"Next"</strong> to proceed to the Register CPA step and begin testing data transmission.',
    cpaStep2Header: '<span style="font-size:15px">✅</span> CPA (UAT) received from RD. Fill in the details below to register in the system.',
    // XML Test (overlayCreateCPA step 3)
    cpaXMLTestTitle: 'Test XML Submission to Revenue Department',
    cpaXMLTestDesc:  'Upload 4 types of XML test files as required by RD to verify that the system can transmit e-Tax Invoice data correctly.',
    xmlTIVName: 'Tax Invoice',
    xmlTIVDesc: 'XML Tax Invoice file for testing',
    xmlDBNName: 'Debit Note',
    xmlDBNDesc: 'XML Debit Note file for testing',
    xmlCDNName: 'Credit Note',
    xmlCDNDesc: 'XML Credit Note file for testing',
    xmlRCTName: 'Receipt',
    xmlRCTDesc: 'XML Receipt file for testing',
    cpaConfirmNote: 'Click <strong>Confirm Upload</strong> to save the CPA in the system — you don\'t need to upload all types at once, you can add more later.',
    // overlayRegisterCPA step 1
    regStep1Title: '📌 CPA Request Process with Revenue Department (Host to Host)',
    regStep1_1: 'Submit a letter of intent to connect to the Host to Host system at the Electronic Tax Administration Division, 21st Floor',
    regStep1_2: 'Revenue Department reviews qualifications and notifies via email (B.O.01)',
    regStep1_3: 'Register IP Address, Endpoint, SSL Certificate at <strong>https://etax.rd.go.th</strong>',
    regStep1_4: 'Receive test CPA (UAT) email from RD with submission code for testing all 4 XML types',
    regStep1_5: 'Upon passing tests, receive Production CPA from RD and GO LIVE',
    regDocHint: '💡 <strong>Prepare documents:</strong> Company registration certificate, authorized person\'s ID, company seal, VAT registration, and IT system information',
    // step 2 UAT
    regUATHeader: '🧪 <strong>UAT Environment</strong> — Enter the test CPA details received from Revenue Department',
    // step 3 XML
    regUATDone:    '✅ <strong>UAT Registration Successful!</strong> — Complete testing all 4 XML types before proceeding',
    reg4XMLTypes:  '📋 4 XML Types Required for Testing',
    xmlTIVFull:    'Tax Invoice / Electronic Tax Invoice',
    xmlDBNFull:    'Debit Note / Electronic Debit Note',
    xmlCDNFull:    'Credit Note / Electronic Credit Note',
    xmlRCTFull:    'Receipt / Electronic Receipt',
    uploadXMLTitle: 'Upload XML File',
    noFileSelected: 'No file selected (.xml)',
    xmlResultTitle: 'XML Submission Results',
    xmlNoResult:    'No data yet — upload a file and click Submit to view results',
    // step 4 PROD
    regPRODHeader: '🚀 <strong>PRODUCTION Environment</strong> — Live CPA certificate. Please verify all information carefully.',
    // overlayXMLWarning
    xmlWarnTitle:      'Cannot Submit',
    xmlWarnDesc:       'All 4 XML file types must be Accepted by RD before proceeding',
    xmlWarnFileStatus: 'File Status by Type',
    // overlayXMLError
    xmlErrSubtitle:    'Please review and fix the issues identified',
    xmlErrUploadLabel: '📁 Upload Corrected XML Files (red border = has errors)',
    docTIVTH: 'Tax Invoice',
    docDBNTH: 'Debit Note',
    docCDNTH: 'Credit Note',
    docRCTTH: 'Receipt',
    xmlErrHint: '💡 Upload only the files with errors (red border) or re-upload all files',
    // Toast / dynamic messages
    toastFillAll:     'Please fill in all required fields',
    toastTaxId13:     'Tax ID must be 13 digits',
    toastSelectComp:  'Please select a company',
    toastFillHost:    'Please enter a Host',
    toastFillAllFields: 'Please fill in all required fields',
    toastCopied:      'Token copied',
    toastTokenDel:    'Token deleted',
    toastNotifNone:   'No notifications ✓',
    toastNoData:      'Document not found',
    toastRefreshed:   'Data refreshed',
    toastNoExport:    'No data to export',
    toastDownload:    'Downloading response...',
    // Table empty rows
    emptyApp:     'No applications found',
    emptyComp:    'No companies found',
    emptyCPA:     'No CPA records found',
    emptyGeneral: 'No data found',
    emptyNoAppComp: 'No companies linked to this application',
    emptyToken:   'No tokens yet — click Generate Token to create one',
    emptyDaily:   'No data found for selected date, or click Search',
    emptyMonthly: 'No data found, or click Search again',
    emptyStatus:  'No data found, or click Search again',
    emptyXMLResult: 'No data yet — upload a file and click Submit to view results',
    noDataOption: 'No data',
    // Pagination units
    unitRecords: 'records',
    // Stat cards sub-labels
    statSubRecords: 'records',
    statSubSuccess: 'successful',
    statSubFailed:  'failed',
    statSubRate:    'success rate',
    statSubTotal:   'Total documents (click to reset)',
    statSubAwaiting:'Received (click to filter)',
    statSubAccepted:'Passed (click to filter)',
    statSubRejected:'Rejected (click to filter)',
    statSubAwaitingNoFilter: 'Received',
    statSubAcceptedNoFilter: 'Passed',
    statSubRejectedNoFilter: 'Rejected',
    statSubClickReset: 'click to reset',
    // Confirm status modal
    statusActivate:   'Activate',
    statusDeactivate: 'Deactivate',
    // Pagination navigation
    pagPrev: 'Previous',
    pagNext: 'Next',
    pagShowRange: 'Showing',
    pagFrom: 'of',
  }
};

function toggleLanguage() {
  currentLang = currentLang === 'TH' ? 'EN' : 'TH';
  localStorage.setItem('lang', currentLang);
  applyLanguage();
}

function applyLanguage() {
  var t = translations[currentLang];
  // Update all [data-i18n] elements (textContent)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update all [data-i18n-html] elements (innerHTML — allows HTML tags)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Update all [data-i18n-ph] elements (placeholder attribute)
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Update all [data-i18n-title] elements (title attribute)
  document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) el.title = t[key];
  });
  // Update lang toggle button (shows language you'll switch TO)
  var btn = document.getElementById('langToggleBtn');
  if (btn) btn.textContent = t.langBtn;
  // Update html lang attribute
  document.documentElement.lang = currentLang === 'TH' ? 'th' : 'en';
  // Update "All" first option in filter selects
  ['statusFilterDocType','statusFilterStatus','dailyFilterStatus'].forEach(function(selId) {
    var sel = document.getElementById(selId);
    if (sel && sel.options[0]) sel.options[0].text = t.optAll;
  });
  // Update loading text
  var loadEl = document.getElementById('loadingText');
  if (loadEl && !loadEl.classList.contains('show')) loadEl.textContent = t.loadingText;
}

// -------------------------------------------------------
//  DOM CONTENT LOADED — INIT
// -------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  applyLanguage();
  navigate('application');
});
