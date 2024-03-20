"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.lostAndDamage = exports.lastDate = exports.kpis = exports.kpiInventario = exports.invntoryWalder = exports.inventory = exports.inWarehouse = exports.inWarehouseHistoric = exports.inTransitAndArrived = exports.pricelistOld = exports.inAmazonHistoric = exports.inAmazon = exports.glosary = exports.filters = exports.filterLagging = exports.filterAssignment4Unconfirmed = exports.filterAssignment4 = exports.filterAssignment3Prueba = exports.filterAssignment3 = exports.filterAssignment2 = exports.filterAssignment1Old = exports.filterAssignment1 = exports.estimatedMonthlyStorageFee = exports.djangoSession = exports.djangoMigrations = exports.djangoContentType = exports.djangoAdminLog = exports.dimenciones = exports.distributors = exports.distributorList = exports.correcionUpc = exports.poInvoice = exports.comparacionMeltable = exports.company = exports.brands = exports.adjustmentEvent = exports.bankBalanceHistoric = exports.bankBalance = exports.authPermission = exports.authGroupPermissions = exports.authGroup = exports.auditoriaAuditoria = exports.assetsStatus = exports.asinRankin = exports.asin = exports.arreglarAsin = exports.activos = exports.devolution = exports.business = void 0;
exports.reporteF1RankMarginUsers = exports.unifiedResponseProgramsFilters = exports.reporteF1Distributor = exports.reporteF1 = exports.reporteEmision = exports.reporteDistributorRankMarginBase = exports.unifiedResponseProgramsF3 = exports.refunds = exports.unifiedResponseProgramsF2 = exports.recOrd = exports.recFtl = exports.reasonDiscard = exports.purchaseOrdersWh = exports.poOld = exports.purchaseOrdersConfirmedInvoices = exports.products = exports.productType = exports.productPriceHistory = exports.productPrice = exports.productOrder = exports.pricelisthistoricIntermediate = exports.pricelisthistoric = exports.pricelistOldDiaAntesPruebaFea = exports.pricelistGeneral = exports.pricelistOriginal = exports.pricelist = exports.pricelisStatus = exports.salesCompleted = exports.pescaAsinUpc = exports.permissions = exports.pendingProcessStatus = exports.order = exports.newInventoryHistoric = exports.moduleList = exports.modules = exports.modificarBoxPricelist = exports.minPricesProduct = exports.meltableOrigin = exports.meltableDepartments = exports.meltable = exports.restockOld = exports.restock = exports.salesFtl = exports.newInventory = exports.salesVelocitySummary = exports.asinTier = exports.userList = exports.usersUser = exports.userRol = exports.sellerSnap = void 0;
exports.topBestPricesTomanEnCuentaDescuento = exports.topBestPrices = exports.tokenBlacklistOutstandingtoken = exports.tokenBlacklistBlacklistedtoken = exports.tableStatusWaiting = exports.tableConfirmedInvoices = exports.statusRestock = exports.starProduct = exports.selfTo = exports.sectionList = exports.sections = exports.searchProduc = exports.salesOld = exports.restockEmission = exports.rolPermissionsList = exports.rolPermissions = exports.rolList = exports.restockFilters = exports.restock2 = exports.responseRocketPowerHistoric = exports.responseRocketPower = exports.reporteTotalesDistribuidor = exports.reporteReasonDiscard = exports.reporteRankTeamRevisado = exports.reporteRankTeamMarginMenor8 = exports.reporteRankTeamMarginMayor8 = exports.reporteRankDistributorSinRevisar = exports.reporteRankDistributorRevisado = exports.reportePoTotalFecha = exports.reporteGeneralF2Nuevo = exports.reportePo2 = exports.reportePo = exports.reporteMamalonF2Users = exports.reporteMamalonF2 = exports.reporteMamalonF1Users = exports.borrarTablaUpc = exports.reporteMamalon2 = exports.reporteMamalon = exports.reporteMamalon2Juan = exports.reporteGeneralF2 = exports.reporteF4SinEmitir = exports.reporteF4 = exports.reporteF3Distributor = exports.reporteF3 = exports.reporteF2TotalCost = exports.reporteF2Distributor = exports.reporteF2AvgMargin = exports.unifiedResponsePrograms = exports.reporteF2 = exports.reporteF1Restock = void 0;
exports.totalF2Rafa = exports.variacionesPedro = exports.restockBundleUpc = exports.statusPurchaseOrder = exports.upcCompletosNoviembre = exports.discardHistoricF2 = exports.reasonDiscardF2 = exports.productCategory = exports.reporteMamalon2JuanTeam3 = exports.sellerSnapApi = exports.statusTypeF2 = exports.productSize = exports.netoTotalSb = exports.reportManuelUpdates = exports.listAsinRestockAlert = exports.upcCompleted = exports.pedroFixUpc = exports.tablaTemporalMedidasRestock = exports.upcFiles = exports.reporteRankF2 = exports.asinBaseCompraBundle = exports.asinBase = exports.reporteMamalonF2UsersJuan = exports.noEmitirWalde = exports.restockPackQuantity = exports.listAsinRestockLowMarginAndHighMovement = exports.upcOfFiles = exports.marginNetoBorrar = exports.salesVelocitySummaryBorrar = exports.deshabilitadaRestockStatusNotasNotConfirmed = exports.reportePo2Nuevo = exports.listAsinRestockImportant = exports.credentialsApi = exports.variation = exports.goUpcGb = exports.voc = exports.unifiedResponseProgramsBundle = exports.warehouse = exports.vendor = exports.variationMala = exports.vDistributorId = exports.upcFallidos = exports.upcBase = exports.upcAsin = exports.upc = exports.unifiedResponseProgramsF2Repetidos = exports.truckAssignmentHistoric = exports.sales = exports.truckAssignment = exports.topF1 = void 0;
exports.po = exports.filesCost = exports.sizeProductCal = exports.categoryProductCal = exports.listAsinRestockTotal = exports.weightProductCal = exports.variacionesRestockReporte = exports.reportePoRestockNew = exports.d = exports.restockCantidadTotalcostDiario = exports.restockStatusEmpresa = exports.holdConfirmed = exports.diarioDescartadoPersonaBuyers = exports.restockHistoric = exports.test = exports.reportePoRestockBundle = exports.unifiedResponseProgramsF2Historic = exports.totalesEmpresasRestock = exports.listAsinRestockSobrante = exports.restockEmission2 = exports.restockNotification = exports.lastPoStatus = exports.countPendientesRestock = exports.countPendientesVariation = exports.marginDist = exports.listVariation = exports.asinFaltantes = exports.importantMovementRestockEmpresasDiario = exports.pendingProcessStatusLifeTime = exports.lifeTimeUpc = exports.capturePriceOrder = exports.restockBundle = exports.asinBundleBase = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.business = (0, pg_core_1.pgTable)("business", {
    id: (0, pg_core_1.serial)("id").notNull(),
    nbBusiness: (0, pg_core_1.varchar)("nb_business", { length: 200 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
});
exports.devolution = (0, pg_core_1.pgTable)("devolution", {
    id: (0, pg_core_1.serial)("id").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    invId: (0, pg_core_1.bigint)("inv_id", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unity: (0, pg_core_1.bigint)("unity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cogs: (0, pg_core_1.bigint)("cogs", { mode: "number" }),
    note: (0, pg_core_1.text)("note"),
});
exports.activos = (0, pg_core_1.pgTable)("activos", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amount: (0, pg_core_1.bigint)("amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    percent: (0, pg_core_1.bigint)("percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    typeAmount: (0, pg_core_1.bigint)("type_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(1),
    fecha: (0, pg_core_1.timestamp)("fecha", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    asNegative: (0, pg_core_1.bigint)("as_negative", { mode: "number" }).default(0),
});
exports.arreglarAsin = (0, pg_core_1.pgTable)("arreglar_asin", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
});
exports.asin = (0, pg_core_1.pgTable)("asin", {
    id: (0, pg_core_1.serial)("id").notNull(),
    asin: (0, pg_core_1.text)("asin"),
});
exports.asinRankin = (0, pg_core_1.pgTable)("asin_rankin", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    rank: (0, pg_core_1.text)("rank"),
});
exports.assetsStatus = (0, pg_core_1.pgTable)("assets_status", {
    id: (0, pg_core_1.serial)("id").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    invId: (0, pg_core_1.bigint)("inv_id", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorToWarehouse: (0, pg_core_1.bigint)("distributor_to_warehouse", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    warehouse: (0, pg_core_1.bigint)("warehouse", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    warehouseToAmazon: (0, pg_core_1.bigint)("warehouse_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sold: (0, pg_core_1.bigint)("sold", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    statusWaiting: (0, pg_core_1.bigint)("status_waiting", { mode: "number" }),
});
exports.auditoriaAuditoria = (0, pg_core_1.pgTable)("auditoria_auditoria", {
    idAuditoria: (0, pg_core_1.serial)("id_auditoria").primaryKey().notNull(),
    idUser: (0, pg_core_1.integer)("id_user").notNull(),
    descripcion: (0, pg_core_1.text)("descripcion").notNull(),
    accion: (0, pg_core_1.varchar)("accion", { length: 100 }).notNull(),
    modulo: (0, pg_core_1.varchar)("modulo", { length: 100 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).notNull(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }).notNull(),
    idUpdated: (0, pg_core_1.integer)("id_updated"),
});
exports.authGroup = (0, pg_core_1.pgTable)("auth_group", {
    id: (0, pg_core_1.serial)("id").notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 150 }).notNull(),
});
exports.authGroupPermissions = (0, pg_core_1.pgTable)("auth_group_permissions", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    groupId: (0, pg_core_1.integer)("group_id").notNull(),
    permissionId: (0, pg_core_1.integer)("permission_id").notNull(),
});
exports.authPermission = (0, pg_core_1.pgTable)("auth_permission", {
    id: (0, pg_core_1.serial)("id").notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    contentTypeId: (0, pg_core_1.integer)("content_type_id").notNull(),
    codename: (0, pg_core_1.varchar)("codename", { length: 100 }).notNull(),
});
exports.bankBalance = (0, pg_core_1.pgTable)("bank_balance", {
    id: (0, pg_core_1.serial)("id").notNull(),
    companyId: (0, pg_core_1.integer)("company_id"),
    bank: (0, pg_core_1.varchar)("bank", { length: 200 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    balance: (0, pg_core_1.bigint)("balance", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.bankBalanceHistoric = (0, pg_core_1.pgTable)("bank_balance_historic", {
    id: (0, pg_core_1.serial)("id").notNull(),
    companyId: (0, pg_core_1.integer)("company_id"),
    bank: (0, pg_core_1.varchar)("bank", { length: 200 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    balance: (0, pg_core_1.bigint)("balance", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.adjustmentEvent = (0, pg_core_1.pgTable)("adjustment_event", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('adjustment_event_id_seq', regclass)).primaryKey().notNull(),
    type: (0, pg_core_1.text)("type"),
    postedDate: (0, pg_core_1.timestamp)("posted_date", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amount: (0, pg_core_1.bigint)("amount", { mode: "number" }),
    key: (0, pg_core_1.text)("key"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
});
exports.brands = (0, pg_core_1.pgTable)("brands", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    name: (0, pg_core_1.text)("name"),
    category: (0, pg_core_1.text)("category"),
    primarySubcategory: (0, pg_core_1.text)("primary_subcategory"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amazonInStockRate: (0, pg_core_1.bigint)("amazon_in_stock_rate", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averageNumberOfSellers: (0, pg_core_1.bigint)("average_number_of_sellers", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averagePrice: (0, pg_core_1.bigint)("average_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    monthlyRevenueEstimate: (0, pg_core_1.bigint)("monthly_revenue_estimate", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    monthlyUnitsSoldEstimate: (0, pg_core_1.bigint)("monthly_units_sold_estimate", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averageSizeOfProduct: (0, pg_core_1.bigint)("average_size_of_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averageReviewRating: (0, pg_core_1.bigint)("average_review_rating", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalProductCount: (0, pg_core_1.bigint)("total_product_count", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averageNumberOfFbaSellers: (0, pg_core_1.bigint)("average_number_of_fba_sellers", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    brandScore: (0, pg_core_1.bigint)("brand_score", { mode: "number" }),
    storeFront: (0, pg_core_1.text)("store_front"),
    dominantSeller: (0, pg_core_1.text)("dominant_seller"),
    notes: (0, pg_core_1.text)("notes"),
});
exports.company = (0, pg_core_1.pgTable)("company", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    companyName: (0, pg_core_1.varchar)("company_name", { length: 200 }),
    status: (0, pg_core_1.integer)("status"),
    companyName2: (0, pg_core_1.varchar)("company_name_2", { length: 200 }),
});
exports.comparacionMeltable = (0, pg_core_1.pgTable)("comparacion_meltable", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rankF1: (0, pg_core_1.bigint)("rank_f1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rankOld: (0, pg_core_1.bigint)("rank_old", { mode: "number" }),
    fecha: (0, pg_core_1.text)("fecha"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
});
exports.poInvoice = (0, pg_core_1.pgTable)("po_invoice", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    itemNumber: (0, pg_core_1.text)("item_number"),
    productName: (0, pg_core_1.text)("product_name"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    unitCost: (0, pg_core_1.numeric)("unit_cost"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numberPo: (0, pg_core_1.bigint)("number_po", { mode: "number" }),
    status: (0, pg_core_1.integer)("status"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    noConfirmed: (0, pg_core_1.bigint)("no_confirmed", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idReasonDiscard: (0, pg_core_1.bigint)("id_reason_discard", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
}, function (table) {
    return {
        idxPublicPoInvoiceCases: (0, pg_core_1.index)("idx_public_po_invoice_cases").on(table.cases),
        idxPublicPoInvoiceId: (0, pg_core_1.index)("idx_public_po_invoice_id").on(table.id),
        idxPublicPoInvoiceItemNumber: (0, pg_core_1.index)("idx_public_po_invoice_item_number").on(table.itemNumber),
        idxPublicPoInvoiceNumberPo: (0, pg_core_1.index)("idx_public_po_invoice_number_po").on(table.numberPo),
        idxPublicPoInvoiceProductName: (0, pg_core_1.index)("idx_public_po_invoice_product_name").on(table.productName),
        idxPublicPoInvoiceStatus: (0, pg_core_1.index)("idx_public_po_invoice_status").on(table.status),
        idxPublicPoInvoiceUnitCost: (0, pg_core_1.index)("idx_public_po_invoice_unit_cost").on(table.unitCost),
        idxPublicPoInvoiceUnits: (0, pg_core_1.index)("idx_public_po_invoice_units").on(table.units),
        idxPublicPoInvoiceUpc: (0, pg_core_1.index)("idx_public_po_invoice_upc").on(table.upc),
    };
});
exports.correcionUpc = (0, pg_core_1.pgTable)("correcion_upc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upcOriginal: (0, pg_core_1.text)("upc_original"),
    upcProcesado: (0, pg_core_1.text)("upc_procesado"),
});
exports.distributorList = (0, pg_core_1.pgTable)("distributor_list", {
    idDistributor: (0, pg_core_1.integer)("id_distributor"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    countDistributor: (0, pg_core_1.bigint)("count_distributor", { mode: "number" }),
});
exports.distributors = (0, pg_core_1.pgTable)("distributors", {
    id: (0, pg_core_1.integer)("id").primaryKey().notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    category: (0, pg_core_1.varchar)("category", { length: 100 }),
    type: (0, pg_core_1.varchar)("type", { length: 100 }),
    status: (0, pg_core_1.integer)("status").default(0),
    respToQuestions: (0, pg_core_1.varchar)("resp_to_questions", { length: 1028 }),
    moq: (0, pg_core_1.varchar)("moq", { length: 256 }),
    credentials: (0, pg_core_1.varchar)("credentials", { length: 256 }),
    dateIni: (0, pg_core_1.timestamp)("date_ini", { mode: 'string' }),
    notes: (0, pg_core_1.text)("notes"),
    ubication: (0, pg_core_1.varchar)("ubication", { length: 100 }),
    flagDiscount: (0, pg_core_1.integer)("flag_discount").default(0),
    flagSend: (0, pg_core_1.integer)("flag_send").default(0),
    timeSend: (0, pg_core_1.varchar)("time_send", { length: 50 }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
    statusDescription: (0, pg_core_1.varchar)("status_description", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minimumForIssuance: (0, pg_core_1.bigint)("minimum_for_issuance", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ldMedianaDays: (0, pg_core_1.bigint)("ld_mediana_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ldAverageDays: (0, pg_core_1.bigint)("ld_average_days", { mode: "number" }),
});
exports.dimenciones = (0, pg_core_1.pgTable)("dimenciones", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idF2: (0, pg_core_1.bigint)("id_f2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    rank: (0, pg_core_1.text)("rank"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    meltable: (0, pg_core_1.text)("meltable"),
    productSize: (0, pg_core_1.text)("product_size"),
}, function (table) {
    return {
        idxDimencionesId: (0, pg_core_1.index)("idx_dimenciones_id").on(table.id),
        idxDimencionesIdF2: (0, pg_core_1.index)("idx_dimenciones_id_f2").on(table.idF2),
        idxDimencionesMargin: (0, pg_core_1.index)("idx_dimenciones_margin").on(table.margin),
        idxPublicDimencionesAsin: (0, pg_core_1.index)("idx_public_dimenciones_asin").on(table.asin),
    };
});
exports.djangoAdminLog = (0, pg_core_1.pgTable)("django_admin_log", {
    id: (0, pg_core_1.serial)("id").notNull(),
    actionTime: (0, pg_core_1.timestamp)("action_time", { withTimezone: true, mode: 'string' }).notNull(),
    objectId: (0, pg_core_1.text)("object_id"),
    objectRepr: (0, pg_core_1.varchar)("object_repr", { length: 200 }).notNull(),
    actionFlag: (0, pg_core_1.smallint)("action_flag").notNull(),
    changeMessage: (0, pg_core_1.text)("change_message").notNull(),
    contentTypeId: (0, pg_core_1.integer)("content_type_id"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    userId: (0, pg_core_1.bigint)("user_id", { mode: "number" }).notNull(),
});
exports.djangoContentType = (0, pg_core_1.pgTable)("django_content_type", {
    id: (0, pg_core_1.serial)("id").notNull(),
    appLabel: (0, pg_core_1.varchar)("app_label", { length: 100 }).notNull(),
    model: (0, pg_core_1.varchar)("model", { length: 100 }).notNull(),
});
exports.djangoMigrations = (0, pg_core_1.pgTable)("django_migrations", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    app: (0, pg_core_1.varchar)("app", { length: 255 }).notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    applied: (0, pg_core_1.timestamp)("applied", { withTimezone: true, mode: 'string' }).notNull(),
});
exports.djangoSession = (0, pg_core_1.pgTable)("django_session", {
    sessionKey: (0, pg_core_1.varchar)("session_key", { length: 40 }).notNull(),
    sessionData: (0, pg_core_1.text)("session_data").notNull(),
    expireDate: (0, pg_core_1.timestamp)("expire_date", { withTimezone: true, mode: 'string' }).notNull(),
});
exports.estimatedMonthlyStorageFee = (0, pg_core_1.pgTable)("estimated_monthly_storage_fee", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    fnsku: (0, pg_core_1.text)("fnsku"),
    productName: (0, pg_core_1.text)("product_name"),
    monthOfCharge: (0, pg_core_1.text)("month_of_charge"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amount: (0, pg_core_1.bigint)("amount", { mode: "number" }),
    hashKey: (0, pg_core_1.text)("hash_key"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.filterAssignment1 = (0, pg_core_1.pgTable)("filter_assignment_1", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('filter_assignment_1_id_seq1', regclass)).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPrecelist: (0, pg_core_1.bigint)("id_precelist", { mode: "number" }),
    distribuidor: (0, pg_core_1.text)("distribuidor"),
    status: (0, pg_core_1.integer)("status"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    qty: (0, pg_core_1.bigint)("qty", { mode: "number" }),
    notas: (0, pg_core_1.text)("notas"),
    identifier: (0, pg_core_1.text)("identifier"),
    title: (0, pg_core_1.text)("title"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    amazonTitle: (0, pg_core_1.text)("amazon_title"),
    amazonCategory: (0, pg_core_1.text)("amazon_category"),
    brand: (0, pg_core_1.text)("brand"),
    asin: (0, pg_core_1.text)("asin"),
    amazonUpcEan: (0, pg_core_1.text)("amazon_upc_ean"),
    upcEan: (0, pg_core_1.text)("upc_ean"),
    buyBox: (0, pg_core_1.text)("buy_box"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amazonSellsStock: (0, pg_core_1.bigint)("amazon_sells_stock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amazonBuyBoxPrice: (0, pg_core_1.bigint)("amazon_buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averagePrice30Days: (0, pg_core_1.bigint)("average_price_30_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averagePrice90Days: (0, pg_core_1.bigint)("average_price_90_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amazonReturnAfterFees: (0, pg_core_1.bigint)("amazon_return_after_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    grossProfit: (0, pg_core_1.bigint)("gross_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    grossRoi: (0, pg_core_1.bigint)("gross_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    potentialMonthlyProfit: (0, pg_core_1.bigint)("potential_monthly_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weightLbs: (0, pg_core_1.bigint)("weight_lbs", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank30: (0, pg_core_1.bigint)("sales_rank_30", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averageRank90: (0, pg_core_1.bigint)("average_rank_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    averageRank180: (0, pg_core_1.bigint)("average_rank_180", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    estimatedMonthlySales: (0, pg_core_1.bigint)("estimated_monthly_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    reviews: (0, pg_core_1.bigint)("reviews", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rating: (0, pg_core_1.bigint)("rating", { mode: "number" }),
    upcReal: (0, pg_core_1.text)("upc_real"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fulfillmentFee: (0, pg_core_1.bigint)("fulfillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFeeTactical: (0, pg_core_1.bigint)("referral_fee_tactical", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    avPrice: (0, pg_core_1.bigint)("av_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    avRanking: (0, pg_core_1.bigint)("av_ranking", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitFeetsPerUnit: (0, pg_core_1.bigint)("cubit_feets_per_unit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToFitInAPalletDistWh: (0, pg_core_1.bigint)("units_to_fit_in_a_pallet_dist_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToFitInAPalletWhAmz: (0, pg_core_1.bigint)("units_to_fit_in_a_pallet_wh_amz", { mode: "number" }),
    amazonUrl: (0, pg_core_1.text)("amazon_url"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    corepricedisplayDesktopFeatureDiv: (0, pg_core_1.text)("corepricedisplay_desktop_feature_div"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    monthlyInventoryFees: (0, pg_core_1.integer)("monthly_inventory_fees"),
    smallAndLight: (0, pg_core_1.text)("small_and_light"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fees: (0, pg_core_1.bigint)("fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    bbFees: (0, pg_core_1.bigint)("bb_fees", { mode: "number" }),
    arafPorcentaje: (0, pg_core_1.integer)("araf_porcentaje"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    targetPrice: (0, pg_core_1.bigint)("target_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxUpdated: (0, pg_core_1.bigint)("buy_box_updated", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF1ToF2: (0, pg_core_1.varchar)("notes_f1_to_f2", { length: 255 }),
});
exports.filterAssignment1Old = (0, pg_core_1.pgTable)("filter_assignment_1_old", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    qty: (0, pg_core_1.bigint)("qty", { mode: "number" }),
    identifier: (0, pg_core_1.text)("identifier"),
    title: (0, pg_core_1.text)("title"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cost: (0, pg_core_1.bigint)("cost", { mode: "number" }),
    amazonTitle: (0, pg_core_1.text)("amazon_title"),
    amazonCategory: (0, pg_core_1.text)("amazon_category"),
    brand: (0, pg_core_1.char)("brand", { length: 1 }),
    asin: (0, pg_core_1.text)("asin"),
    amazonUpcEan: (0, pg_core_1.text)("amazon_upc_ean"),
    upcEan: (0, pg_core_1.text)("upc_ean"),
    buyBox: (0, pg_core_1.text)("buy_box"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amazonSellsAndInStock: (0, pg_core_1.bigint)("amazon_sells_and_in_stock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amazonBuyBoxPrice: (0, pg_core_1.bigint)("amazon_buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank30: (0, pg_core_1.bigint)("sales_rank_30", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    estimatedMonthlySales: (0, pg_core_1.bigint)("estimated_monthly_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    reviews: (0, pg_core_1.bigint)("reviews", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rating: (0, pg_core_1.bigint)("rating", { mode: "number" }),
    upcReal: (0, pg_core_1.text)("upc_real"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    tipeSale: (0, pg_core_1.bigint)("tipe_sale", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updateAt: (0, pg_core_1.timestamp)("update_at", { withTimezone: true, mode: 'string' }),
});
exports.filterAssignment2 = (0, pg_core_1.pgTable)("filter_assignment_2", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment1: (0, pg_core_1.bigint)("id_filter_assignment_1", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF2ToF3: (0, pg_core_1.varchar)("notes_f2_to_f3", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variationF2: (0, pg_core_1.bigint)("variation_f2", { mode: "number" }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 255 }),
});
exports.filterAssignment3 = (0, pg_core_1.pgTable)("filter_assignment_3", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment2: (0, pg_core_1.bigint)("id_filter_assignment_2", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(1),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF3ToF4: (0, pg_core_1.varchar)("notes_f3_to_f4", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variationF3: (0, pg_core_1.bigint)("variation_f3", { mode: "number" }),
});
exports.filterAssignment3Prueba = (0, pg_core_1.pgTable)("filter_assignment_3_prueba", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('filter_assignment_3_id_seq', regclass)).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment2: (0, pg_core_1.bigint)("id_filter_assignment_2", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(1),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF3ToF4: (0, pg_core_1.varchar)("notes_f3_to_f4", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variationF3: (0, pg_core_1.bigint)("variation_f3", { mode: "number" }),
});
exports.filterAssignment4 = (0, pg_core_1.pgTable)("filter_assignment_4_____", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment3: (0, pg_core_1.bigint)("id_filter_assignment_3", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(1),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF4ToF5: (0, pg_core_1.varchar)("notes_f4_to_f5", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
});
exports.filterAssignment4 = (0, pg_core_1.pgTable)("filter_assignment_4", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('filter_assignment_4_id_seq', regclass)).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment3: (0, pg_core_1.bigint)("id_filter_assignment_3", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(1),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF4ToF5: (0, pg_core_1.varchar)("notes_f4_to_f5", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
});
exports.filterAssignment4Unconfirmed = (0, pg_core_1.pgTable)("filter_assignment_4_unconfirmed", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment4: (0, pg_core_1.bigint)("id_filter_assignment_4", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(1),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF4ToF5: (0, pg_core_1.varchar)("notes_f4_to_f5", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
});
exports.filterLagging = (0, pg_core_1.pgTable)("filter_lagging", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilterAssignment: (0, pg_core_1.bigint)("id_filter_assignment", { mode: "number" }),
    notes: (0, pg_core_1.text)("notes"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(0),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desiredRoi: (0, pg_core_1.bigint)("desired_roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPackPrice: (0, pg_core_1.bigint)("discount_pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("discount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSales: (0, pg_core_1.bigint)("total_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitNet: (0, pg_core_1.bigint)("unit_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalNet: (0, pg_core_1.bigint)("total_net", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedSales: (0, pg_core_1.bigint)("recommended_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPercent: (0, pg_core_1.bigint)("buy_box_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockDays: (0, pg_core_1.bigint)("stock_days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    stockChecker: (0, pg_core_1.bigint)("stock_checker", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    timeMonths: (0, pg_core_1.bigint)("time_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    comments: (0, pg_core_1.text)("comments"),
    noteEstefany: (0, pg_core_1.text)("note_estefany"),
    noteNeil: (0, pg_core_1.text)("note_neil"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPercent: (0, pg_core_1.bigint)("pallet_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCost: (0, pg_core_1.bigint)("shipping_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingToAmazon: (0, pg_core_1.bigint)("shipping_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftlUnitCost: (0, pg_core_1.bigint)("ftl_unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    finalSales: (0, pg_core_1.bigint)("final_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    desciption: (0, pg_core_1.text)("desciption"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lbToOz: (0, pg_core_1.bigint)("lb_to_oz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cubitsFeetPerUnits: (0, pg_core_1.bigint)("cubits_feet_per_units", { mode: "number" }),
    tipoCompra: (0, pg_core_1.text)("tipo_compra"),
    statusAproved: (0, pg_core_1.integer)("status_aproved"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    reasonDiscardId: (0, pg_core_1.integer)("reason_discard_id").array(),
    notesF2OrF3: (0, pg_core_1.varchar)("notes_f2_or_f3", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storageFee: (0, pg_core_1.bigint)("storage_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagFilter: (0, pg_core_1.bigint)("flag_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
});
exports.filters = (0, pg_core_1.pgTable)("filters", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    levelFilter: (0, pg_core_1.bigint)("level_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    boss: (0, pg_core_1.bigint)("boss", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    boss3: (0, pg_core_1.bigint)("boss3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    boss4: (0, pg_core_1.bigint)("boss4", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});
exports.glosary = (0, pg_core_1.pgTable)("glosary", {
    id: (0, pg_core_1.serial)("id").notNull(),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
    termDistributor: (0, pg_core_1.text)("term_distributor"),
    termStandard: (0, pg_core_1.text)("term_standard"),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
});
exports.inAmazon = (0, pg_core_1.pgTable)("in_amazon", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('in_amazon_id_seq_3', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    fnsku: (0, pg_core_1.text)("fnsku"),
    sellersku: (0, pg_core_1.text)("sellersku"),
    condition: (0, pg_core_1.text)("condition"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fulfillablequantity: (0, pg_core_1.bigint)("fulfillablequantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inboundworkingquantity: (0, pg_core_1.bigint)("inboundworkingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inboundshippedquantity: (0, pg_core_1.bigint)("inboundshippedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inboundreceivingquantity: (0, pg_core_1.bigint)("inboundreceivingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalreservedquantity: (0, pg_core_1.bigint)("totalreservedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pendingcustomerorderquantity: (0, pg_core_1.bigint)("pendingcustomerorderquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pendingtransshipmentquantity: (0, pg_core_1.bigint)("pendingtransshipmentquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fcprocessingquantity: (0, pg_core_1.bigint)("fcprocessingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalresearchingquantity: (0, pg_core_1.bigint)("totalresearchingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    researchingquantityinshortterm: (0, pg_core_1.bigint)("researchingquantityinshortterm", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    researchingquantityinmidterm: (0, pg_core_1.bigint)("researchingquantityinmidterm", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    researchingquantityinlongterm: (0, pg_core_1.bigint)("researchingquantityinlongterm", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalunfulfillablequantity: (0, pg_core_1.bigint)("totalunfulfillablequantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    customerdamagedquantity: (0, pg_core_1.bigint)("customerdamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    warehousedamagedquantity: (0, pg_core_1.bigint)("warehousedamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributordamagedquantity: (0, pg_core_1.bigint)("distributordamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    carrierdamagedquantity: (0, pg_core_1.bigint)("carrierdamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    defectivequantity: (0, pg_core_1.bigint)("defectivequantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    expiredquantity: (0, pg_core_1.bigint)("expiredquantity", { mode: "number" }),
    lastupdatedtime: (0, pg_core_1.text)("lastupdatedtime"),
    productname: (0, pg_core_1.text)("productname"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalquantity: (0, pg_core_1.bigint)("totalquantity", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    company: (0, pg_core_1.bigint)("company", { mode: "number" }),
}, function (table) {
    return {
        idxPublicInAmazonAsin: (0, pg_core_1.index)("idx_public_in_amazon_asin").on(table.asin),
        idxPublicInAmazonCreatedAt: (0, pg_core_1.index)("idx_public_in_amazon_created_at").on(table.createdAt),
        idxPublicInAmazonSellersku: (0, pg_core_1.index)("idx_public_in_amazon_sellersku").on(table.sellersku),
    };
});
exports.inAmazonHistoric = (0, pg_core_1.pgTable)("in_amazon_historic", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    fnsku: (0, pg_core_1.text)("fnsku"),
    sellersku: (0, pg_core_1.text)("sellersku"),
    condition: (0, pg_core_1.text)("condition"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fulfillablequantity: (0, pg_core_1.bigint)("fulfillablequantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inboundworkingquantity: (0, pg_core_1.bigint)("inboundworkingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inboundshippedquantity: (0, pg_core_1.bigint)("inboundshippedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inboundreceivingquantity: (0, pg_core_1.bigint)("inboundreceivingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalreservedquantity: (0, pg_core_1.bigint)("totalreservedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pendingcustomerorderquantity: (0, pg_core_1.bigint)("pendingcustomerorderquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pendingtransshipmentquantity: (0, pg_core_1.bigint)("pendingtransshipmentquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fcprocessingquantity: (0, pg_core_1.bigint)("fcprocessingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalresearchingquantity: (0, pg_core_1.bigint)("totalresearchingquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    researchingquantityinshortterm: (0, pg_core_1.bigint)("researchingquantityinshortterm", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    researchingquantityinmidterm: (0, pg_core_1.bigint)("researchingquantityinmidterm", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    researchingquantityinlongterm: (0, pg_core_1.bigint)("researchingquantityinlongterm", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalunfulfillablequantity: (0, pg_core_1.bigint)("totalunfulfillablequantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    customerdamagedquantity: (0, pg_core_1.bigint)("customerdamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    warehousedamagedquantity: (0, pg_core_1.bigint)("warehousedamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributordamagedquantity: (0, pg_core_1.bigint)("distributordamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    carrierdamagedquantity: (0, pg_core_1.bigint)("carrierdamagedquantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    defectivequantity: (0, pg_core_1.bigint)("defectivequantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    expiredquantity: (0, pg_core_1.bigint)("expiredquantity", { mode: "number" }),
    lastupdatedtime: (0, pg_core_1.text)("lastupdatedtime"),
    productname: (0, pg_core_1.text)("productname"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalquantity: (0, pg_core_1.bigint)("totalquantity", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.pricelistOld = (0, pg_core_1.pgTable)("pricelist_old", {
    id: (0, pg_core_1.integer)("id").default(nextval('pricelist_id_seq', regclass)).notNull(),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    box: (0, pg_core_1.integer)("box"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
    brand: (0, pg_core_1.text)("brand"),
    statusRevised: (0, pg_core_1.integer)("status_revised").default(0).notNull(),
});
exports.inTransitAndArrived = (0, pg_core_1.pgTable)("in_transit_and_arrived", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    supplier: (0, pg_core_1.text)("supplier"),
    eta: (0, pg_core_1.timestamp)("eta", { withTimezone: true, mode: 'string' }),
    po: (0, pg_core_1.text)("po"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    typeDocument: (0, pg_core_1.integer)("type_document"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    typeTab: (0, pg_core_1.bigint)("type_tab", { mode: "number" }),
    md5: (0, pg_core_1.text)("md5"),
    asin: (0, pg_core_1.text)("asin"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updateAt: (0, pg_core_1.timestamp)("update_at", { withTimezone: true, mode: 'string' }),
}, function (table) {
    return {
        idxPublicInTransitAndArrivedEta: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_eta").on(table.eta),
        idxPublicInTransitAndArrivedPo: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_po").on(table.po),
        idxPublicInTransitAndArrivedUpc: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_upc").on(table.upc),
        idxPublicInTransitAndArrivedUnits: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_units").on(table.units),
        idxPublicInTransitAndArrivedTypeDocument: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_type_document").on(table.typeDocument),
        idxPublicInTransitAndArrivedTypeTab: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_type_tab").on(table.typeTab),
        idxPublicInTransitAndArrivedAsin: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_asin").on(table.asin),
        idxPublicInTransitAndArrivedCreatedAt: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_created_at").on(table.createdAt),
        idxPublicInTransitAndArrivedUpdateAt: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_update_at").on(table.updateAt),
    };
});
exports.inWarehouseHistoric = (0, pg_core_1.pgTable)("in_warehouse_historic", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    img: (0, pg_core_1.text)("img"),
    idItemNumber: (0, pg_core_1.text)("id_item_number"),
    supplier: (0, pg_core_1.text)("supplier"),
    orderId: (0, pg_core_1.text)("order_id"),
    product: (0, pg_core_1.text)("product"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    eta: (0, pg_core_1.text)("eta"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsReceived: (0, pg_core_1.bigint)("units_received", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    damagedUnits: (0, pg_core_1.bigint)("damaged_units", { mode: "number" }),
    expirationDate: (0, pg_core_1.text)("expiration_date"),
    aux: (0, pg_core_1.text)("aux"),
    ts: (0, pg_core_1.text)("ts"),
    asin1: (0, pg_core_1.text)("asin1"),
    asin2: (0, pg_core_1.text)("asin2"),
    asin3: (0, pg_core_1.text)("asin3"),
    asin4: (0, pg_core_1.text)("asin4"),
    asin5: (0, pg_core_1.text)("asin5"),
    asin6: (0, pg_core_1.text)("asin6"),
    asin7: (0, pg_core_1.text)("asin7"),
    asin8: (0, pg_core_1.text)("asin8"),
    asin9: (0, pg_core_1.text)("asin9"),
    asin10: (0, pg_core_1.text)("asin10"),
    asin11: (0, pg_core_1.text)("asin11"),
    asin12: (0, pg_core_1.text)("asin12"),
    asin13: (0, pg_core_1.text)("asin13"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.inWarehouse = (0, pg_core_1.pgTable)("in_warehouse", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('in_warehouse_historic_id_seq', regclass)).notNull(),
    img: (0, pg_core_1.text)("img"),
    idItemNumber: (0, pg_core_1.text)("id_item_number"),
    supplier: (0, pg_core_1.text)("supplier"),
    orderId: (0, pg_core_1.text)("order_id"),
    product: (0, pg_core_1.text)("product"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pallets: (0, pg_core_1.bigint)("pallets", { mode: "number" }),
    eta: (0, pg_core_1.text)("eta"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsReceived: (0, pg_core_1.bigint)("units_received", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    damagedUnits: (0, pg_core_1.bigint)("damaged_units", { mode: "number" }),
    expirationDate: (0, pg_core_1.text)("expiration_date"),
    aux: (0, pg_core_1.text)("aux"),
    ts: (0, pg_core_1.text)("ts"),
    asin: (0, pg_core_1.text)("asin"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.inventory = (0, pg_core_1.pgTable)("inventory", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    upc: (0, pg_core_1.text)("upc"),
    image: (0, pg_core_1.text)("image"),
    name: (0, pg_core_1.text)("name"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsDamaged: (0, pg_core_1.bigint)("units_damaged", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsMissing: (0, pg_core_1.bigint)("units_missing", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cogs: (0, pg_core_1.bigint)("cogs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCogs: (0, pg_core_1.bigint)("total_cogs", { mode: "number" }),
    type: (0, pg_core_1.text)("type"),
    status: (0, pg_core_1.text)("status"),
    aisles: (0, pg_core_1.text)("aisles"),
    expDate: (0, pg_core_1.text)("exp_date"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.invntoryWalder = (0, pg_core_1.pgTable)("invntory_walder", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    createAt: (0, pg_core_1.timestamp)("create_at", { withTimezone: true, mode: 'string' }),
    updateAt: (0, pg_core_1.timestamp)("update_at", { withTimezone: true, mode: 'string' }),
});
exports.kpiInventario = (0, pg_core_1.pgTable)("kpi_inventario", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    cogsInPack: (0, pg_core_1.text)("cogs_in_pack"),
    sku: (0, pg_core_1.text)("sku"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.kpis = (0, pg_core_1.pgTable)("kpis", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upc: (0, pg_core_1.text)("upc").notNull(),
    asin: (0, pg_core_1.text)("asin").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
});
exports.lastDate = (0, pg_core_1.pgTable)("lastDate", {
    id: (0, pg_core_1.serial)("id").notNull(),
    lastDate: (0, pg_core_1.text)("last_date"),
});
exports.lostAndDamage = (0, pg_core_1.pgTable)("lost_and_damage", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    approvalDate: (0, pg_core_1.timestamp)("approval_date", { withTimezone: true, mode: 'string' }),
    reimbursementId: (0, pg_core_1.text)("reimbursement_id"),
    amazonOrderId: (0, pg_core_1.text)("amazon_order_id"),
    reason: (0, pg_core_1.text)("reason"),
    sku: (0, pg_core_1.text)("sku"),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    quantityReimbursedTotal: (0, pg_core_1.bigint)("quantity_reimbursed_total", { mode: "number" }),
    keyHash: (0, pg_core_1.text)("key_hash"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
});
exports.roles = (0, pg_core_1.pgTable)("roles", {
    id: (0, pg_core_1.integer)("id").default(nextval('user_administration_roles_id_seq', regclass)).primaryKey().notNull(),
    state: (0, pg_core_1.boolean)("state").default(true),
    createdAt: (0, pg_core_1.timestamp)("created_at", { mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { mode: 'string' }),
    deletedAt: (0, pg_core_1.timestamp)("deleted_at", { mode: 'string' }),
    description: (0, pg_core_1.varchar)("description", { length: 50 }).notNull(),
    status: (0, pg_core_1.integer)("status"),
});
exports.sellerSnap = (0, pg_core_1.pgTable)("seller_snap", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaWarehouseQuantity: (0, pg_core_1.bigint)("fba_warehouse_quantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaAvailableQuantity: (0, pg_core_1.bigint)("fba_available_quantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    velocityLast7: (0, pg_core_1.bigint)("velocity_last_7", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    companyId: (0, pg_core_1.bigint)("company_id", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    sku: (0, pg_core_1.text)("sku"),
});
exports.userRol = (0, pg_core_1.pgTable)("user_rol", {
    id: (0, pg_core_1.integer)("id").default(nextval('user_administration_user_rol_id_seq', regclass)).primaryKey().notNull(),
    state: (0, pg_core_1.boolean)("state").notNull(),
    createdAt: (0, pg_core_1.date)("created_at").notNull(),
    updatedAt: (0, pg_core_1.date)("updated_at").notNull(),
    deletedAt: (0, pg_core_1.date)("deleted_at"),
    idUsers: (0, pg_core_1.integer)("id_users").notNull(),
    idRol: (0, pg_core_1.integer)("id_rol").notNull(),
    status: (0, pg_core_1.integer)("status").notNull(),
});
exports.usersUser = (0, pg_core_1.pgTable)("users_user", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('users_user_id_seq', regclass)).primaryKey().notNull(),
    password: (0, pg_core_1.varchar)("password", { length: 128 }).notNull(),
    lastLogin: (0, pg_core_1.timestamp)("last_login", { withTimezone: true, mode: 'string' }),
    isSuperuser: (0, pg_core_1.boolean)("is_superuser").notNull(),
    username: (0, pg_core_1.varchar)("username", { length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)("email", { length: 255 }).notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    lastName: (0, pg_core_1.varchar)("last_name", { length: 255 }),
    isActive: (0, pg_core_1.boolean)("is_active").default(true).notNull(),
    isStaff: (0, pg_core_1.boolean)("is_staff").notNull(),
    status: (0, pg_core_1.integer)("status").default(1),
});
exports.userList = (0, pg_core_1.pgTable)("user_list", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    lastName: (0, pg_core_1.varchar)("last_name", { length: 255 }),
    email: (0, pg_core_1.varchar)("email", { length: 255 }),
    status: (0, pg_core_1.integer)("status"),
    description: (0, pg_core_1.varchar)("description", { length: 50 }),
    idRol: (0, pg_core_1.integer)("id_rol"),
});
exports.asinTier = (0, pg_core_1.pgTable)("asin_tier", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    tier: (0, pg_core_1.bigint)("tier", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.salesVelocitySummary = (0, pg_core_1.pgTable)("sales_velocity_summary", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    weightedVelocity: (0, pg_core_1.numeric)("weighted_velocity"),
    salesVelocity3Days: (0, pg_core_1.numeric)("sales_velocity_3_days"),
    salesVelocity7Days: (0, pg_core_1.numeric)("sales_velocity_7_days"),
    salesVelocity15Days: (0, pg_core_1.numeric)("sales_velocity_15_days"),
    netYesterday: (0, pg_core_1.numeric)("net_yesterday"),
    netToday: (0, pg_core_1.numeric)("net_today"),
    salesVelocity1Days: (0, pg_core_1.numeric)("sales_velocity_1_days"),
    daysSales: (0, pg_core_1.numeric)("days_sales"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    marginYesterday: (0, pg_core_1.numeric)("margin_yesterday"),
}, function (table) {
    return {
        idxPublicSalesVelocitySummaryAsin: (0, pg_core_1.index)("idx_public_sales_velocity_summary_asin").on(table.asin),
        idxPublicSalesVelocitySummaryId: (0, pg_core_1.index)("idx_public_sales_velocity_summary_id").on(table.id),
        idxPublicSalesVelocitySummaryWeightedVelocity: (0, pg_core_1.index)("idx_public_sales_velocity_summary_weighted_velocity").on(table.weightedVelocity),
    };
});
exports.newInventory = (0, pg_core_1.pgTable)("new_inventory", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('new_inventory_id_seq', regclass)).primaryKey().notNull(),
    company: (0, pg_core_1.text)("company"),
    productType: (0, pg_core_1.text)("product_type"),
    category: (0, pg_core_1.text)("category"),
    image: (0, pg_core_1.text)("image"),
    sku: (0, pg_core_1.text)("sku"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    productName: (0, pg_core_1.text)("product_name"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    asinsCount: (0, pg_core_1.bigint)("asins_count", { mode: "number" }),
    supplier: (0, pg_core_1.text)("supplier"),
    idItemNumber: (0, pg_core_1.text)("id_item_number"),
    orderType: (0, pg_core_1.text)("order_type"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    orderId: (0, pg_core_1.bigint)("order_id", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    indiceUnitCostConfirmed: (0, pg_core_1.bigint)("indice_unit_cost_confirmed", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletsTotalesPerOrderPerProduct: (0, pg_core_1.bigint)("pallets_totales_per_order_per_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPerUnit: (0, pg_core_1.bigint)("pallet_per_unit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCostToWhPerUnit: (0, pg_core_1.bigint)("shipping_cost_to_wh_per_unit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCostToAmazonPerUnitAmazon: (0, pg_core_1.bigint)("shipping_cost_to_amazon_per_unit_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsWh: (0, pg_core_1.bigint)("units_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    posiblesUnitsEnCaminoToWh: (0, pg_core_1.bigint)("posibles_units_en_camino_to_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsRecibidasDivididasPorcentualmente: (0, pg_core_1.bigint)("units_recibidas_divididas_porcentualmente", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitPriceMasOverheadToWh: (0, pg_core_1.bigint)("unit_price_mas_overhead_to_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitPriceMasOverheadToAmazon: (0, pg_core_1.bigint)("unit_price_mas_overhead_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPriceMasOverheadToWh: (0, pg_core_1.bigint)("pack_price_mas_overhead_to_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPriceMasOverheadToAmazon: (0, pg_core_1.bigint)("pack_price_mas_overhead_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    damagedMissingUnitsDivididasPorcentualmente: (0, pg_core_1.bigint)("damaged_missing_units_divididas_porcentualmente", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    boxesDivididasPorcentualmente: (0, pg_core_1.bigint)("boxes_divididas_porcentualmente", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    indiceTotalCostDamageUnits: (0, pg_core_1.bigint)("indice_total_cost_damage_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packsAvailable: (0, pg_core_1.bigint)("packs_available", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCogs: (0, pg_core_1.bigint)("total_cogs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCogsDamageMissinUnits: (0, pg_core_1.bigint)("total_cogs_damage_missin_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ventasDiarias: (0, pg_core_1.bigint)("ventas_diarias", { mode: "number" }),
    linkAmz: (0, pg_core_1.text)("link_amz"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToFitInPalletAmz: (0, pg_core_1.bigint)("units_to_fit_in_pallet_amz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    overheadAmz: (0, pg_core_1.bigint)("overhead_amz", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cogsPack: (0, pg_core_1.bigint)("cogs_pack", { mode: "number" }),
    salesInWarehouse: (0, pg_core_1.text)("sales_in_warehouse"),
    skuMalo: (0, pg_core_1.text)("sku_malo"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ftl: (0, pg_core_1.bigint)("ftl", { mode: "number" }),
}, function (table) {
    return {
        idxPublicNewInventoryAsin: (0, pg_core_1.index)("idx_public_new_inventory_asin").on(table.asin),
        idxPublicNewInventoryCogsPack: (0, pg_core_1.index)("idx_public_new_inventory_cogs_pack").on(table.cogsPack),
        idxPublicNewInventoryCreatedAt: (0, pg_core_1.index)("idx_public_new_inventory_created_at").on(table.createdAt),
        idxPublicNewInventoryPackQty: (0, pg_core_1.index)("idx_public_new_inventory_pack_qty").on(table.packQty),
    };
});
exports.salesFtl = (0, pg_core_1.pgTable)("sales_ftl", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('sales_ftl_id_seq', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    upc: (0, pg_core_1.text)("upc"),
    sku: (0, pg_core_1.text)("sku"),
    product: (0, pg_core_1.text)("product"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalPack: (0, pg_core_1.bigint)("total_pack", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cogs: (0, pg_core_1.bigint)("cogs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cost: (0, pg_core_1.bigint)("cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pack: (0, pg_core_1.bigint)("pack", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    purchaseCost: (0, pg_core_1.bigint)("purchase_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packCost: (0, pg_core_1.bigint)("pack_cost", { mode: "number" }),
    fbaShipmentIdentifier: (0, pg_core_1.text)("fba_shipment_identifier"),
    ftl: (0, pg_core_1.text)("ftl"),
    date: (0, pg_core_1.text)("date"),
    md5: (0, pg_core_1.text)("md5"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    typeFtl: (0, pg_core_1.bigint)("type_ftl", { mode: "number" }).default(0),
    source: (0, pg_core_1.text)("source"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    serialOrder: (0, pg_core_1.bigint)("serial_order", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    company: (0, pg_core_1.bigint)("company", { mode: "number" }),
}, function (table) {
    return {
        idxPublicSalesFtlAsin: (0, pg_core_1.index)("idx_public_sales_ftl_asin").on(table.asin),
        idxPublicSalesFtlCogs: (0, pg_core_1.index)("idx_public_sales_ftl_cogs").on(table.cogs),
        idxPublicSalesFtlCost: (0, pg_core_1.index)("idx_public_sales_ftl_cost").on(table.cost),
        idxPublicSalesFtlDate: (0, pg_core_1.index)("idx_public_sales_ftl_date").on(table.date),
        idxPublicSalesFtlFbaShipmentIdentifier: (0, pg_core_1.index)("idx_public_sales_ftl_fba_shipment_identifier").on(table.fbaShipmentIdentifier),
        idxPublicSalesFtlFtl: (0, pg_core_1.index)("idx_public_sales_ftl_ftl").on(table.ftl),
        idxPublicSalesFtlId: (0, pg_core_1.index)("idx_public_sales_ftl_id").on(table.id),
        idxPublicSalesFtlMd5: (0, pg_core_1.index)("idx_public_sales_ftl_md5").on(table.md5),
        idxPublicSalesFtlPack: (0, pg_core_1.index)("idx_public_sales_ftl_pack").on(table.pack),
        idxPublicSalesFtlPackCost: (0, pg_core_1.index)("idx_public_sales_ftl_pack_cost").on(table.packCost),
        idxPublicSalesFtlProduct: (0, pg_core_1.index)("idx_public_sales_ftl_product").on(table.product),
        idxPublicSalesFtlPurchaseCost: (0, pg_core_1.index)("idx_public_sales_ftl_purchase_cost").on(table.purchaseCost),
        idxPublicSalesFtlSource: (0, pg_core_1.index)("idx_public_sales_ftl_source").on(table.source),
        idxPublicSalesFtlTotal: (0, pg_core_1.index)("idx_public_sales_ftl_total").on(table.total),
        idxPublicSalesFtlTotalPack: (0, pg_core_1.index)("idx_public_sales_ftl_total_pack").on(table.totalPack),
        idxPublicSalesFtlTypeFtl: (0, pg_core_1.index)("idx_public_sales_ftl_type_ftl").on(table.typeFtl),
        idxPublicSalesFtlUpc: (0, pg_core_1.index)("idx_public_sales_ftl_upc").on(table.upc),
    };
});
exports.restock = (0, pg_core_1.pgTable)("restock", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('restock_new_id_seq', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    fechaEmision: (0, pg_core_1.timestamp)("fecha_emision", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numPo: (0, pg_core_1.bigint)("num_po", { mode: "number" }),
    fechaConfirmado: (0, pg_core_1.timestamp)("fecha_confirmado", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusAsinRestock: (0, pg_core_1.bigint)("id_status_asin_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusProduct: (0, pg_core_1.bigint)("id_status_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    leadTimes: (0, pg_core_1.bigint)("lead_times", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocity7Days: (0, pg_core_1.bigint)("sales_velocity_7days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocityPossibly: (0, pg_core_1.bigint)("sales_velocity_possibly", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dosl: (0, pg_core_1.bigint)("dosl", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToRestock: (0, pg_core_1.bigint)("sales_to_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAmz: (0, pg_core_1.bigint)("sales_amz", { mode: "number" }),
    lastestFtl: (0, pg_core_1.text)("lastest_ftl"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsWarehouse: (0, pg_core_1.bigint)("units_warehouse", { mode: "number" }),
    availability: (0, pg_core_1.text)("availability"),
    ts: (0, pg_core_1.timestamp)("ts", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }),
    statusWal: (0, pg_core_1.text)("status_wal"),
    brands: (0, pg_core_1.text)("brands"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proAsin: (0, pg_core_1.bigint)("pro_asin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proUpc: (0, pg_core_1.bigint)("pro_upc", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUserF2: (0, pg_core_1.bigint)("id_user_f2", { mode: "number" }),
    notaF1Restock: (0, pg_core_1.varchar)("nota_f1_restock", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }).default(0),
    notaF2Restock: (0, pg_core_1.varchar)("nota_f2_restock", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lookinFowardDays: (0, pg_core_1.bigint)("lookin_foward_days", { mode: "number" }),
    lookiFowardDate: (0, pg_core_1.timestamp)("looki_foward_date", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocity: (0, pg_core_1.bigint)("sales_velocity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lastUser: (0, pg_core_1.bigint)("last_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagHistoric: (0, pg_core_1.bigint)("flag_historic", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    countDistributorsDispo: (0, pg_core_1.bigint)("count_distributors_dispo", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    star: (0, pg_core_1.bigint)("star", { mode: "number" }).default(0),
    lastPoInTransit: (0, pg_core_1.text)("last_po_in_transit").default(0),
}, function (table) {
    return {
        idxPublicCompanyRestockAsin: (0, pg_core_1.index)("idx_public_company_restock_asin").on(table.asin),
        idxPublicCompanyRestockUpc: (0, pg_core_1.index)("idx_public_company_restock_upc").on(table.upc),
        idxPublicRestockAvailability: (0, pg_core_1.index)("idx_public_restock_availability").on(table.availability),
        idxPublicRestockBrands: (0, pg_core_1.index)("idx_public_restock_brands").on(table.brands),
        idxPublicRestockDosl: (0, pg_core_1.index)("idx_public_restock_dosl").on(table.dosl),
        idxPublicRestockId: (0, pg_core_1.index)("idx_public_restock_id").on(table.id),
        idxPublicRestockIdCompany: (0, pg_core_1.index)("idx_public_restock_id_company").on(table.idCompany),
        idxPublicRestockIdDistributor: (0, pg_core_1.index)("idx_public_restock_id_distributor").on(table.idDistributor),
        idxPublicRestockIdStatusAsinRestock: (0, pg_core_1.index)("idx_public_restock_id_status_asin_restock").on(table.idStatusAsinRestock),
        idxPublicRestockIdStatusIdStatusProduct: (0, pg_core_1.index)("idx_public_restock_id_status_id_status_product").on(table.idStatusProduct),
        idxPublicRestockIdUser: (0, pg_core_1.index)("idx_public_restock_id_user").on(table.idUser),
        idxPublicRestockLastestFtl: (0, pg_core_1.index)("idx_public_restock_lastest_ftl").on(table.lastestFtl),
        idxPublicRestockLeadTimes: (0, pg_core_1.index)("idx_public_restock_lead_times").on(table.leadTimes),
        idxPublicRestockNumPo: (0, pg_core_1.index)("idx_public_restock_num_po").on(table.numPo),
        idxPublicRestockPrice: (0, pg_core_1.index)("idx_public_restock_price").on(table.price),
        idxPublicRestockProAsin: (0, pg_core_1.index)("idx_public_restock_pro_asin").on(table.proAsin),
        idxPublicRestockProUpc: (0, pg_core_1.index)("idx_public_restock_pro_upc").on(table.proUpc),
        idxPublicRestockSales: (0, pg_core_1.index)("idx_public_restock_sales").on(table.sales),
        idxPublicRestockSalesAmz: (0, pg_core_1.index)("idx_public_restock_sales_amz").on(table.salesAmz),
        idxPublicRestockSalesMonths: (0, pg_core_1.index)("idx_public_restock_sales_months").on(table.salesMonths),
        idxPublicRestockSalesToRestock: (0, pg_core_1.index)("idx_public_restock_sales_to_restock").on(table.salesToRestock),
        idxPublicRestockSalesVelocity7Days: (0, pg_core_1.index)("idx_public_restock_sales_velocity_7days").on(table.salesVelocity7Days),
        idxPublicRestockSalesVelocityPossibly: (0, pg_core_1.index)("idx_public_restock_sales_velocity_possibly").on(table.salesVelocityPossibly),
        idxPublicRestockStatusWal: (0, pg_core_1.index)("idx_public_restock_status_wal").on(table.statusWal),
        idxPublicRestockTs: (0, pg_core_1.index)("idx_public_restock_ts").on(table.ts),
        idxPublicRestockUnitsWarehouse: (0, pg_core_1.index)("idx_public_restock_units_warehouse").on(table.unitsWarehouse),
        idxPublicRestockIdUserF2: (0, pg_core_1.index)("idx_public_restock_id_user_f2").on(table.idUserF2),
        idxPublicRestockFiltersIdUser: (0, pg_core_1.index)("idx_public_restock_filters_id_user").on(table.idUser),
    };
});
exports.restockOld = (0, pg_core_1.pgTable)("restock_old", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idProductOrder: (0, pg_core_1.bigint)("id_product_order", { mode: "number" }),
    createAt: (0, pg_core_1.timestamp)("create_at", { withTimezone: true, mode: 'string' }),
    updateAt: (0, pg_core_1.timestamp)("update_at", { withTimezone: true, mode: 'string' }),
});
exports.meltable = (0, pg_core_1.pgTable)("meltable", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    meltable: (0, pg_core_1.text)("meltable"),
});
exports.meltableDepartments = (0, pg_core_1.pgTable)("meltable_departments", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    star: (0, pg_core_1.text)("star"),
    restock: (0, pg_core_1.text)("restock"),
    nc: (0, pg_core_1.text)("nc"),
});
exports.meltableOrigin = (0, pg_core_1.pgTable)("meltable_origin", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    status: (0, pg_core_1.text)("status"),
});
exports.minPricesProduct = (0, pg_core_1.pgTable)("min_prices_product", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    description: (0, pg_core_1.text)("description"),
    price: (0, pg_core_1.numeric)("price"),
    upc: (0, pg_core_1.text)("upc"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    discountPrice: (0, pg_core_1.numeric)("discount_price"),
    discountPercent: (0, pg_core_1.numeric)("discount_percent"),
    box: (0, pg_core_1.integer)("box"),
    moq: (0, pg_core_1.numeric)("moq"),
});
exports.modificarBoxPricelist = (0, pg_core_1.pgTable)("modificar_box_pricelist", {
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
});
exports.modules = (0, pg_core_1.pgTable)("modules", {
    id: (0, pg_core_1.integer)("id").default(nextval('user_administration_module_id_seq', regclass)).notNull(),
    state: (0, pg_core_1.boolean)("state").default(true).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    deletedAt: (0, pg_core_1.timestamp)("deleted_at", { withTimezone: true, mode: 'string' }),
    description: (0, pg_core_1.varchar)("description", { length: 50 }).notNull(),
    status: (0, pg_core_1.integer)("status"),
    moIcon: (0, pg_core_1.varchar)("mo_icon", { length: 20 }),
    moUrl: (0, pg_core_1.char)("mo_url", { length: 50 }),
});
exports.moduleList = (0, pg_core_1.pgTable)("module_list", {
    moId: (0, pg_core_1.integer)("mo_id"),
    description: (0, pg_core_1.varchar)("description", { length: 50 }),
    status: (0, pg_core_1.integer)("status"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    moIcon: (0, pg_core_1.varchar)("mo_icon", { length: 20 }),
    moUrl: (0, pg_core_1.char)("mo_url", { length: 50 }),
});
exports.newInventoryHistoric = (0, pg_core_1.pgTable)("new_inventory_historic", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    company: (0, pg_core_1.text)("company"),
    productType: (0, pg_core_1.text)("product_type"),
    category: (0, pg_core_1.text)("category"),
    image: (0, pg_core_1.text)("image"),
    sku: (0, pg_core_1.text)("sku"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    productName: (0, pg_core_1.text)("product_name"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    asinsCount: (0, pg_core_1.bigint)("asins_count", { mode: "number" }),
    supplier: (0, pg_core_1.text)("supplier"),
    idItemNumber: (0, pg_core_1.text)("id_item_number"),
    orderType: (0, pg_core_1.text)("order_type"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    orderId: (0, pg_core_1.bigint)("order_id", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    indiceUnitCostConfirmed: (0, pg_core_1.bigint)("indice_unit_cost_confirmed", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletsTotalesPerOrderPerProduct: (0, pg_core_1.bigint)("pallets_totales_per_order_per_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    palletPerUnit: (0, pg_core_1.bigint)("pallet_per_unit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCostToWhPerUnit: (0, pg_core_1.bigint)("shipping_cost_to_wh_per_unit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingCostToAmazonPerUnitAmazon: (0, pg_core_1.bigint)("shipping_cost_to_amazon_per_unit_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsWh: (0, pg_core_1.bigint)("units_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    posiblesUnitsEnCaminoToWh: (0, pg_core_1.bigint)("posibles_units_en_camino_to_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsRecibidasDivididasPorcentualmente: (0, pg_core_1.bigint)("units_recibidas_divididas_porcentualmente", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPrice: (0, pg_core_1.bigint)("pack_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitPriceMasOverheadToWh: (0, pg_core_1.bigint)("unit_price_mas_overhead_to_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitPriceMasOverheadToAmazon: (0, pg_core_1.bigint)("unit_price_mas_overhead_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPriceMasOverheadToWh: (0, pg_core_1.bigint)("pack_price_mas_overhead_to_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packPriceMasOverheadToAmazon: (0, pg_core_1.bigint)("pack_price_mas_overhead_to_amazon", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    damagedMissingUnitsDivididasPorcentualmente: (0, pg_core_1.bigint)("damaged_missing_units_divididas_porcentualmente", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    boxesDivididasPorcentualmente: (0, pg_core_1.bigint)("boxes_divididas_porcentualmente", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    indiceTotalCostDamageUnits: (0, pg_core_1.bigint)("indice_total_cost_damage_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packsAvailable: (0, pg_core_1.bigint)("packs_available", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCogs: (0, pg_core_1.bigint)("total_cogs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCogsDamageMissinUnits: (0, pg_core_1.bigint)("total_cogs_damage_missin_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ventasDiarias: (0, pg_core_1.bigint)("ventas_diarias", { mode: "number" }),
    linkAmz: (0, pg_core_1.text)("link_amz"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToFitInPalletAmz: (0, pg_core_1.bigint)("units_to_fit_in_pallet_amz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    overheadAmz: (0, pg_core_1.bigint)("overhead_amz", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cogsPack: (0, pg_core_1.bigint)("cogs_pack", { mode: "number" }),
});
exports.order = (0, pg_core_1.pgTable)("order", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('order_id_seq', regclass)).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPoNumber: (0, pg_core_1.bigint)("id_po_number", { mode: "number" }).default(nextval('order_id_po_number_seq', regclass)).notNull(),
    fecha: (0, pg_core_1.date)("fecha"),
    terms: (0, pg_core_1.text)("terms"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idVender: (0, pg_core_1.bigint)("id_vender", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idSoldTo: (0, pg_core_1.bigint)("id_sold_to", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    priceDesire: (0, pg_core_1.bigint)("price_desire", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitDesire: (0, pg_core_1.bigint)("unit_desire", { mode: "number" }),
    status: (0, pg_core_1.integer)("status"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipVia: (0, pg_core_1.bigint)("ship_via", { mode: "number" }),
});
exports.pendingProcessStatus = (0, pg_core_1.pgTable)("pending_process_status", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    nameFile: (0, pg_core_1.text)("name_file"),
    dateUpdate: (0, pg_core_1.timestamp)("date_update", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    origin: (0, pg_core_1.bigint)("origin", { mode: "number" }),
    statusAsig: (0, pg_core_1.integer)("status_asig").default(0).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    padlock: (0, pg_core_1.bigint)("padlock", { mode: "number" }).default(0),
});
exports.permissions = (0, pg_core_1.pgTable)("permissions", {
    id: (0, pg_core_1.serial)("id").notNull(),
    description: (0, pg_core_1.varchar)("description", { length: 50 }).notNull(),
    state: (0, pg_core_1.boolean)("state").default(true).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { mode: 'string' }),
    deletedAt: (0, pg_core_1.timestamp)("deleted_at", { withTimezone: true, mode: 'string' }),
});
exports.pescaAsinUpc = (0, pg_core_1.pgTable)("pesca_asin_upc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    fileName: (0, pg_core_1.text)("file_name"),
    upcEan: (0, pg_core_1.text)("upc_ean"),
    upcReal: (0, pg_core_1.text)("upc_real"),
    azNote: (0, pg_core_1.text)("az_note"),
    asin: (0, pg_core_1.text)("asin"),
    asinWithUrl: (0, pg_core_1.text)("asin_with_url"),
});
exports.salesCompleted = (0, pg_core_1.pgTable)("sales_completed", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    amazonorderid: (0, pg_core_1.text)("amazonorderid"),
    lastupdatedate: (0, pg_core_1.timestamp)("lastupdatedate", { precision: 2, withTimezone: true, mode: 'string' }),
    latestshipdate: (0, pg_core_1.timestamp)("latestshipdate", { precision: 2, withTimezone: true, mode: 'string' }),
    purchasedate: (0, pg_core_1.timestamp)("purchasedate", { precision: 2, withTimezone: true, mode: 'string' }),
    orderstatus: (0, pg_core_1.text)("orderstatus"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numberofitemsshipped: (0, pg_core_1.bigint)("numberofitemsshipped", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ordertotal: (0, pg_core_1.bigint)("ordertotal", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    priceItem: (0, pg_core_1.bigint)("price_item", { mode: "number" }),
    orderitemid: (0, pg_core_1.text)("orderitemid"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    feesItemProduct: (0, pg_core_1.bigint)("fees_item_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    sku: (0, pg_core_1.text)("sku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itemtaxAmount: (0, pg_core_1.bigint)("itemtax_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
}, function (table) {
    return {
        idxPublicSalesCompletedAmazonorderid: (0, pg_core_1.index)("idx_public_sales_completed_amazonorderid").on(table.amazonorderid),
        idxPublicSalesCompletedFbaFees: (0, pg_core_1.index)("idx_public_sales_completed_fba_fees").on(table.fbaFees),
        idxPublicSalesCompletedFeesItemProduct: (0, pg_core_1.index)("idx_public_sales_completed_fees_item_product").on(table.feesItemProduct),
        idxPublicSalesCompletedItemtaxAmount: (0, pg_core_1.index)("idx_public_sales_completed_itemtax_amount").on(table.itemtaxAmount),
        idxPublicSalesCompletedNumberofitemsshipped: (0, pg_core_1.index)("idx_public_sales_completed_numberofitemsshipped").on(table.numberofitemsshipped),
        idxPublicSalesCompletedOrderstatus: (0, pg_core_1.index)("idx_public_sales_completed_orderstatus").on(table.orderstatus),
        idxPublicSalesCompletedOrdertotal: (0, pg_core_1.index)("idx_public_sales_completed_ordertotal").on(table.ordertotal),
        idxPublicSalesCompletedPriceItem: (0, pg_core_1.index)("idx_public_sales_completed_price_item").on(table.priceItem),
        idxPublicSalesCompletedReferralFee: (0, pg_core_1.index)("idx_public_sales_completed_referral_fee").on(table.referralFee),
        idxPublicSalesCompletedStatus: (0, pg_core_1.index)("idx_public_sales_completed_status").on(table.status),
        idxPublicSalesSalesCompletedLastupdatedate: (0, pg_core_1.index)("idx_public_sales_sales_completed_lastupdatedate").on(table.lastupdatedate),
        idxPublicSalesSalesCompletedLatestshipdate: (0, pg_core_1.index)("idx_public_sales_sales_completed_latestshipdate").on(table.latestshipdate),
        idxPublicSalesSalesCompletedOrderitemid: (0, pg_core_1.index)("idx_public_sales_sales_completed_orderitemid").on(table.orderitemid),
        idxPublicSalesSalesCompletedPurchasedate: (0, pg_core_1.index)("idx_public_sales_sales_completed_purchasedate").on(table.purchasedate),
        idxPublicSalesSalesCompletedSku: (0, pg_core_1.index)("idx_public_sales_sales_completed_sku").on(table.sku),
    };
});
exports.pricelisStatus = (0, pg_core_1.pgTable)("pricelis_status", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    status: (0, pg_core_1.integer)("status"),
});
exports.pricelist = (0, pg_core_1.pgTable)("pricelist", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('pricelist_reset_id_seq', regclass)).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorId: (0, pg_core_1.bigint)("distributor_id", { mode: "number" }),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    discountPercent: (0, pg_core_1.text)("discount_percent"),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { withTimezone: true, mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
    brand: (0, pg_core_1.text)("brand"),
    statusRevised: (0, pg_core_1.integer)("status_revised"),
    manufacture: (0, pg_core_1.text)("manufacture"),
}, function (table) {
    return {
        idxPublicPricelistBox: (0, pg_core_1.index)("idx_public_pricelist_box").on(table.box),
        idxPublicPricelistBrand: (0, pg_core_1.index)("idx_public_pricelist_brand").on(table.brand),
        idxPublicPricelistDateCreated: (0, pg_core_1.index)("idx_public_pricelist_date_created").on(table.dateCreated),
        idxPublicPricelistDateUpdated: (0, pg_core_1.index)("idx_public_pricelist_date_updated").on(table.dateUpdated),
        idxPublicPricelistDescription: (0, pg_core_1.index)("idx_public_pricelist_description").on(table.description),
        idxPublicPricelistDiscountPercent: (0, pg_core_1.index)("idx_public_pricelist_discount_percent").on(table.discountPercent),
        idxPublicPricelistDiscountPrice: (0, pg_core_1.index)("idx_public_pricelist_discount_price").on(table.discountPrice),
        idxPublicPricelistDisplay: (0, pg_core_1.index)("idx_public_pricelist_display").on(table.display),
        idxPublicPricelistDistributorId: (0, pg_core_1.index)("idx_public_pricelist_distributor_id").on(table.distributorId),
        idxPublicPricelistId: (0, pg_core_1.index)("idx_public_pricelist_id").on(table.id),
        idxPublicPricelistItemNumber: (0, pg_core_1.index)("idx_public_pricelist_item_number").on(table.itemNumber),
        idxPublicPricelistMoq: (0, pg_core_1.index)("idx_public_pricelist_moq").on(table.moq),
        idxPublicPricelistPrice: (0, pg_core_1.index)("idx_public_pricelist_price").on(table.price),
        idxPublicPricelistStatusManufacture: (0, pg_core_1.index)("idx_public_pricelist_status_manufacture").on(table.manufacture),
        idxPublicPricelistStatusRevised: (0, pg_core_1.index)("idx_public_pricelist_status_revised").on(table.statusRevised),
        idxPublicPricelistUpc: (0, pg_core_1.index)("idx_public_pricelist_upc").on(table.upc),
    };
});
exports.pricelistOriginal = (0, pg_core_1.pgTable)("pricelist_original", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('pricelist_id_seq', regclass)).notNull(),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    box: (0, pg_core_1.integer)("box"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { withTimezone: true, mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
    brand: (0, pg_core_1.text)("brand"),
    statusRevised: (0, pg_core_1.integer)("status_revised").default(0).notNull(),
    manufacture: (0, pg_core_1.text)("manufacture"),
});
exports.pricelistGeneral = (0, pg_core_1.pgTable)("pricelist_general", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    box: (0, pg_core_1.integer)("box"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { withTimezone: true, mode: 'string' }),
    manufacture: (0, pg_core_1.text)("manufacture"),
});
exports.pricelistOldDiaAntesPruebaFea = (0, pg_core_1.pgTable)("pricelist_old_dia_antes_prueba_fea", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('pricelist_new_id_seq', regclass)).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorId: (0, pg_core_1.bigint)("distributor_id", { mode: "number" }),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { withTimezone: true, mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
    brand: (0, pg_core_1.text)("brand"),
    statusRevised: (0, pg_core_1.integer)("status_revised"),
    manufacture: (0, pg_core_1.text)("manufacture"),
}, function (table) {
    return {
        idxPublicPricelistOldDiaAntesPruebaFeaBox: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_box").on(table.box),
        idxPublicPricelistOldDiaAntesPruebaFeaBrand: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_brand").on(table.brand),
        idxPublicPricelistOldDiaAntesPruebaFeaDateCreated: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_date_created").on(table.dateCreated),
        idxPublicPricelistOldDiaAntesPruebaFeaDateUpdated: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_date_updated").on(table.dateUpdated),
        idxPublicPricelistOldDiaAntesPruebaFeaDescription: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_description").on(table.description),
        idxPublicPricelistOldDiaAntesPruebaFeaDiscountPercent: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_discount_percent").on(table.discountPercent),
        idxPublicPricelistOldDiaAntesPruebaFeaDiscountPrice: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_discount_price").on(table.discountPrice),
        idxPublicPricelistOldDiaAntesPruebaFeaDisplay: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_display").on(table.display),
        idxPublicPricelistOldDiaAntesPruebaFeaDistributorId: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_distributor_id").on(table.distributorId),
        idxPublicPricelistOldDiaAntesPruebaFeaId: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_id").on(table.id),
        idxPublicPricelistOldDiaAntesPruebaFeaItemNumber: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_item_number").on(table.itemNumber),
        idxPublicPricelistOldDiaAntesPruebaFeaMoq: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_moq").on(table.moq),
        idxPublicPricelistOldDiaAntesPruebaFeaPrice: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_price").on(table.price),
        idxPublicPricelistOldDiaAntesPruebaFeaStatusManufactur: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_status_manufactur").on(table.manufacture),
        idxPublicPricelistOldDiaAntesPruebaFeaStatusRevised: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_status_revised").on(table.statusRevised),
        idxPublicPricelistOldDiaAntesPruebaFeaUpc: (0, pg_core_1.index)("idx_public_pricelist_old_dia_antes_prueba_fea_upc").on(table.upc),
    };
});
exports.pricelisthistoric = (0, pg_core_1.pgTable)("pricelisthistoric", {
    id: (0, pg_core_1.serial)("id").notNull(),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
});
exports.pricelisthistoricIntermediate = (0, pg_core_1.pgTable)("pricelisthistoric_intermediate", {
    id: (0, pg_core_1.integer)("id").default(nextval('pricelisthistoric_id_seq', regclass)).primaryKey().notNull(),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { withTimezone: true, mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
    display: (0, pg_core_1.text)("display"),
    manufacture: (0, pg_core_1.text)("manufacture"),
}, function (table) {
    return {
        idxPublicPricelisthistoricIntermediateBox: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_box").on(table.box),
        idxPublicPricelisthistoricIntermediateUpc: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_upc").on(table.upc),
        idxPublicPricelisthistoricIntermediateDateCreated: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_date_created").on(table.dateCreated),
        idxPublicPricelisthistoricIntermediateDateUpdated: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_date_updated").on(table.dateUpdated),
        idxPublicPricelisthistoricIntermediateDescription: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_description").on(table.description),
        idxPublicPricelisthistoricIntermediateDiscountPercent: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_discount_percent").on(table.discountPercent),
        idxPublicPricelisthistoricIntermediateDiscountPrice: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_discount_price").on(table.discountPrice),
        idxPublicPricelisthistoricIntermediateDisplay: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_display").on(table.display),
        idxPublicPricelisthistoricIntermediateDistributorId: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_distributor_id").on(table.distributorId),
        idxPublicPricelisthistoricIntermediateId: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_id").on(table.id),
        idxPublicPricelisthistoricIntermediateItemNumber: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_item_number").on(table.itemNumber),
        idxPricelisthistoricIntermediatePricelistMoq: (0, pg_core_1.index)("idx_pricelisthistoric_intermediate_pricelist_moq").on(table.moq),
        idxPublicPricelisthistoricIntermediatePrice: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_price").on(table.price),
        idxPublicPricelisthistoricIntermediateStatusManufacture: (0, pg_core_1.index)("idx_public_pricelisthistoric_intermediate_status_manufacture").on(table.manufacture),
    };
});
exports.productOrder = (0, pg_core_1.pgTable)("product_order", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('product_order_id_seq', regclass)).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idOrder: (0, pg_core_1.bigint)("id_order", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idF4: (0, pg_core_1.bigint)("id_f4", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    typeOrder: (0, pg_core_1.bigint)("type_order", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagDicount: (0, pg_core_1.bigint)("flag_dicount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    poBox: (0, pg_core_1.bigint)("po_box", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    poTotalCost: (0, pg_core_1.bigint)("po_total_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    poUnits: (0, pg_core_1.bigint)("po_units", { mode: "number" }),
});
exports.productPrice = (0, pg_core_1.pgTable)("product_price", {
    id: (0, pg_core_1.serial)("id").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    invId: (0, pg_core_1.bigint)("inv_id", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    coGs: (0, pg_core_1.bigint)("co_gs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsForPickup: (0, pg_core_1.bigint)("units_for_pickup", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsInTransit: (0, pg_core_1.bigint)("units_in_transit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    removedUnits: (0, pg_core_1.bigint)("removed_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dailySales: (0, pg_core_1.bigint)("daily_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesPrice: (0, pg_core_1.bigint)("sales_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    overheadWh: (0, pg_core_1.bigint)("overhead_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    changeOfPrice: (0, pg_core_1.bigint)("change_of_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingAmz: (0, pg_core_1.bigint)("shipping_amz", { mode: "number" }),
});
exports.productPriceHistory = (0, pg_core_1.pgTable)("product_price_history", {
    id: (0, pg_core_1.serial)("id").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    invId: (0, pg_core_1.bigint)("inv_id", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    coGs: (0, pg_core_1.bigint)("co_gs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsForPickup: (0, pg_core_1.bigint)("units_for_pickup", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsInTransit: (0, pg_core_1.bigint)("units_in_transit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    removedUnits: (0, pg_core_1.bigint)("removed_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dailySales: (0, pg_core_1.bigint)("daily_sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesPrice: (0, pg_core_1.bigint)("sales_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    overheadWh: (0, pg_core_1.bigint)("overhead_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    changeOfPrice: (0, pg_core_1.bigint)("change_of_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shippingAmz: (0, pg_core_1.bigint)("shipping_amz", { mode: "number" }),
});
exports.productType = (0, pg_core_1.pgTable)("product_type", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    prodictType: (0, pg_core_1.integer)("prodict_type"),
    createAt: (0, pg_core_1.timestamp)("create_at", { withTimezone: true, mode: 'string' }),
    updateAt: (0, pg_core_1.timestamp)("update_at", { withTimezone: true, mode: 'string' }),
});
exports.products = (0, pg_core_1.pgTable)("products", {
    id: (0, pg_core_1.serial)("id").notNull(),
    asin: (0, pg_core_1.varchar)("asin", { length: 50 }),
    upc: (0, pg_core_1.varchar)("upc", { length: 150 }),
    presentation: (0, pg_core_1.varchar)("presentation", { length: 450 }),
    description: (0, pg_core_1.varchar)("description", { length: 450 }),
    status: (0, pg_core_1.integer)("status").default(0),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
    display: (0, pg_core_1.text)("display"),
});
exports.purchaseOrdersConfirmedInvoices = (0, pg_core_1.pgTable)("purchase_orders_confirmed_invoices", {
    id: (0, pg_core_1.serial)("id").notNull(),
    itemNumber: (0, pg_core_1.text)("item_number"),
    productName: (0, pg_core_1.text)("product_name"),
    upc: (0, pg_core_1.text)("upc"),
    units: (0, pg_core_1.text)("units"),
    cases: (0, pg_core_1.text)("cases"),
    unitCost: (0, pg_core_1.text)("unit_cost"),
    total: (0, pg_core_1.text)("total"),
    asinsCount: (0, pg_core_1.text)("asins_count"),
    discount: (0, pg_core_1.text)("discount"),
    productNotes: (0, pg_core_1.text)("product_notes"),
    clickToCheckProduct: (0, pg_core_1.text)("click_to_check_product"),
    supplier: (0, pg_core_1.text)("supplier"),
    idItemNumber: (0, pg_core_1.text)("id_item_number"),
    orderType: (0, pg_core_1.text)("order_type"),
    orderId: (0, pg_core_1.text)("order_id"),
    unitsPerCase: (0, pg_core_1.text)("units_per_case"),
    totalCostConfirmed: (0, pg_core_1.text)("total_cost_confirmed"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.poOld = (0, pg_core_1.pgTable)("po_old", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idF3: (0, pg_core_1.bigint)("id_f3", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }).default(0),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numberPo: (0, pg_core_1.bigint)("number_po", { mode: "number" }),
    noConfirmed: (0, pg_core_1.integer)("no_confirmed").default(0),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    price: (0, pg_core_1.numeric)("price"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedBuyingUnits: (0, pg_core_1.bigint)("requested_buying_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    upc: (0, pg_core_1.text)("upc"),
    name: (0, pg_core_1.text)("name"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    idDistributor: (0, pg_core_1.integer)("id_distributor"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idReasonDiscard: (0, pg_core_1.bigint)("id_reason_discard", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    originPo: (0, pg_core_1.bigint)("origin_po", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idResEmission: (0, pg_core_1.bigint)("id_res_emission", { mode: "number" }),
}, function (table) {
    return {
        idxPublicPoAsin: (0, pg_core_1.index)("idx_public_po_asin").on(table.asin),
        idxPublicPoBox: (0, pg_core_1.index)("idx_public_po_box").on(table.box),
        idxPublicPoDescription: (0, pg_core_1.index)("idx_public_po_description").on(table.description),
        idxPublicPoId: (0, pg_core_1.index)("idx_public_po_id").on(table.id),
        idxPublicPoIdDistributor: (0, pg_core_1.index)("idx_public_po_id_distributor").on(table.idDistributor),
        idxPublicPoIdF3: (0, pg_core_1.index)("idx_public_po_id_f3").on(table.idF3),
        idxPublicPoIdReasonDiscard: (0, pg_core_1.index)("idx_public_po_id_reason_discard").on(table.idReasonDiscard),
        idxPublicPoItemNumber: (0, pg_core_1.index)("idx_public_po_item_number").on(table.itemNumber),
        idxPublicPoName: (0, pg_core_1.index)("idx_public_po_name").on(table.name),
        idxPublicPoNumberNoConfirmed: (0, pg_core_1.index)("idx_public_po_number_no_confirmed").on(table.noConfirmed),
        idxPublicPoNumberPo: (0, pg_core_1.index)("idx_public_po_number_po").on(table.numberPo),
        idxPublicPoPackQuantity: (0, pg_core_1.index)("idx_public_po_pack_quantity").on(table.packQuantity),
        idxPublicPoPrice: (0, pg_core_1.index)("idx_public_po_price").on(table.price),
        idxPublicPoRequestedBuyingUnits: (0, pg_core_1.index)("idx_public_po_requested_buying_units").on(table.requestedBuyingUnits),
        idxPublicPoStatus: (0, pg_core_1.index)("idx_public_po_status").on(table.status),
        idxPublicPoUpc: (0, pg_core_1.index)("idx_public_po_upc").on(table.upc),
    };
});
exports.purchaseOrdersWh = (0, pg_core_1.pgTable)("purchase_orders_wh", {
    id: (0, pg_core_1.serial)("id").notNull(),
    supplier: (0, pg_core_1.text)("supplier"),
    productLinkAmazon: (0, pg_core_1.text)("product_link_amazon"),
    packQty: (0, pg_core_1.text)("pack_qty"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    upc: (0, pg_core_1.text)("upc"),
    buyboxPrice: (0, pg_core_1.text)("buybox_price"),
    unitCost: (0, pg_core_1.text)("unit_cost"),
    packPrice: (0, pg_core_1.text)("pack_price"),
    desiredRoi: (0, pg_core_1.text)("desired_roi"),
    unitTargetPrice: (0, pg_core_1.text)("unit_target_price"),
    targetPrice: (0, pg_core_1.text)("target_price"),
    discountDolar: (0, pg_core_1.text)("discount_dolar"),
    discountPorcentaje: (0, pg_core_1.text)("discount_porcentaje"),
    buybox: (0, pg_core_1.text)("buybox"),
    totalCost: (0, pg_core_1.text)("total_cost"),
    totalSales: (0, pg_core_1.text)("total_sales"),
    unitNet: (0, pg_core_1.text)("unit_net"),
    totalNet: (0, pg_core_1.text)("total_net"),
    roi: (0, pg_core_1.text)("roi"),
    margin: (0, pg_core_1.text)("margin"),
    units: (0, pg_core_1.text)("units"),
    sales: (0, pg_core_1.text)("sales"),
    recommendedSales: (0, pg_core_1.text)("recommended_sales"),
    butboxProcentaje: (0, pg_core_1.text)("butbox_procentaje"),
    stockDays: (0, pg_core_1.text)("stock_days"),
    stockChecker: (0, pg_core_1.text)("stock_checker"),
    timeMonths: (0, pg_core_1.text)("time_months"),
    salesMonths: (0, pg_core_1.text)("sales_months"),
    comments: (0, pg_core_1.text)("comments"),
    paraEstefany: (0, pg_core_1.text)("para_estefany"),
    paraNeil: (0, pg_core_1.text)("para_neil"),
    approval: (0, pg_core_1.text)("approval"),
    disapproval: (0, pg_core_1.text)("disapproval"),
    palletPerc: (0, pg_core_1.text)("pallet_perc"),
    pallets: (0, pg_core_1.text)("pallets"),
    palletsDependenciaCircular: (0, pg_core_1.text)("pallets_dependencia_circular"),
    shippingCost: (0, pg_core_1.text)("shipping_cost"),
    shippingToAmazon: (0, pg_core_1.text)("shipping_to_amazon"),
    ftlUnitCost: (0, pg_core_1.text)("ftl_unit_cost"),
    finalSales: (0, pg_core_1.text)("final_sales"),
    timestamp: (0, pg_core_1.text)("timestamp"),
    responsable: (0, pg_core_1.text)("responsable"),
    case: (0, pg_core_1.text)("case"),
    moq: (0, pg_core_1.text)("moq"),
    description: (0, pg_core_1.text)("description"),
    idAsin: (0, pg_core_1.text)("id_asin"),
    idItemNumber: (0, pg_core_1.text)("id_item_number"),
    timestampNeilApproval: (0, pg_core_1.text)("timestamp_neil_approval"),
    estado: (0, pg_core_1.text)("estado"),
    link: (0, pg_core_1.text)("link"),
    orderId: (0, pg_core_1.text)("order_id"),
    linkToAmazon: (0, pg_core_1.text)("link_to_amazon"),
    eta: (0, pg_core_1.text)("eta"),
    invoiceDate: (0, pg_core_1.text)("invoice_date"),
    shippingCost2: (0, pg_core_1.text)("shipping_cost_2"),
    unitsConfirmadas: (0, pg_core_1.text)("units_confirmadas"),
    asin1: (0, pg_core_1.text)("asin1"),
    asin2: (0, pg_core_1.text)("asin2"),
    asin3: (0, pg_core_1.text)("asin3"),
    asin4: (0, pg_core_1.text)("asin4"),
    asin5: (0, pg_core_1.text)("asin5"),
    asin6: (0, pg_core_1.text)("asin6"),
    asin7: (0, pg_core_1.text)("asin7"),
    asin8: (0, pg_core_1.text)("asin8"),
    asin9: (0, pg_core_1.text)("asin9"),
    asin10: (0, pg_core_1.text)("asin10"),
    asin11: (0, pg_core_1.text)("asin11"),
    asin12: (0, pg_core_1.text)("asin12"),
    asin13: (0, pg_core_1.text)("asin13"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.reasonDiscard = (0, pg_core_1.pgTable)("reason_discard", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    description: (0, pg_core_1.text)("description"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    filterId: (0, pg_core_1.integer)("filter_id").notNull(),
});
exports.recFtl = (0, pg_core_1.pgTable)("rec_ftl", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    ftl: (0, pg_core_1.text)("ftl"),
});
exports.recOrd = (0, pg_core_1.pgTable)("rec_ord", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    amazonorderid: (0, pg_core_1.text)("amazonorderid"),
    lastupdatedate: (0, pg_core_1.timestamp)("lastupdatedate", { precision: 2, withTimezone: true, mode: 'string' }),
    latestshipdate: (0, pg_core_1.timestamp)("latestshipdate", { precision: 2, withTimezone: true, mode: 'string' }),
    purchasedate: (0, pg_core_1.timestamp)("purchasedate", { precision: 2, withTimezone: true, mode: 'string' }),
    orderstatus: (0, pg_core_1.text)("orderstatus"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ordertotalAmount: (0, pg_core_1.bigint)("ordertotal_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itemtaxAmount: (0, pg_core_1.bigint)("itemtax_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itempriceAmount: (0, pg_core_1.bigint)("itemprice_amount", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    sellersku: (0, pg_core_1.text)("sellersku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    quantityordered: (0, pg_core_1.bigint)("quantityordered", { mode: "number" }),
    orderitemid: (0, pg_core_1.text)("orderitemid"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    priceBuyItem: (0, pg_core_1.bigint)("price_buy_item", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    feesItemProduct: (0, pg_core_1.bigint)("fees_item_product", { mode: "number" }),
    status: (0, pg_core_1.integer)("status"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variableClosingFee: (0, pg_core_1.bigint)("variable_closing_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    perItemFee: (0, pg_core_1.bigint)("per_item_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaWeightHandling: (0, pg_core_1.bigint)("fba_weight_handling", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickAndPack: (0, pg_core_1.bigint)("fba_pick_and_pack", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaOrderHandling: (0, pg_core_1.bigint)("fba_order_handling", { mode: "number" }),
    img: (0, pg_core_1.text)("img"),
    ftl: (0, pg_core_1.text)("ftl"),
});
exports.unifiedResponseProgramsF2 = (0, pg_core_1.pgTable)("unified_response_programs_f2", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('unified_response_programs_f2_id_seq', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current"),
    salesRankReference: (0, pg_core_1.text)("sales_rank_reference"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    reviews: (0, pg_core_1.text)("reviews"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesKeeepa: (0, pg_core_1.bigint)("sales_keeepa", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAz: (0, pg_core_1.bigint)("sales_az", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank306090: (0, pg_core_1.bigint)("sales_rank_30_60_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUnifiedResponsePrograms: (0, pg_core_1.bigint)("id_unified_response_programs", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalFeeBasedOnCurrentPrice: (0, pg_core_1.bigint)("referal_fee_based_on_current_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginPercent: (0, pg_core_1.bigint)("margin_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginFromCurrentFbaPrice: (0, pg_core_1.bigint)("margin_from_current_fba_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roiExcludingPrep: (0, pg_core_1.bigint)("roi_excluding_prep", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minMarginMet: (0, pg_core_1.bigint)("min_margin_met", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inStock: (0, pg_core_1.bigint)("in_stock", { mode: "number" }),
    restock: (0, pg_core_1.integer)("restock"),
    new: (0, pg_core_1.integer)("new"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mfnPrice: (0, pg_core_1.bigint)("mfn_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amzOutOfStock90: (0, pg_core_1.bigint)("amz_out_of_stock_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedSellingUnitsOrder: (0, pg_core_1.bigint)("requested_selling_units_order", { mode: "number" }),
    phase2Notes: (0, pg_core_1.varchar)("phase_2_notes", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba3PartPrice: (0, pg_core_1.bigint)("fba_3_part_price", { mode: "number" }),
    referalPercent: (0, pg_core_1.varchar)("referal_percent", { length: 255 }),
    referalFee: (0, pg_core_1.varchar)("referal_fee", { length: 255 }),
    roi: (0, pg_core_1.varchar)("roi", { length: 255 }),
    snl: (0, pg_core_1.varchar)("snl", { length: 255 }),
    minMarginMet: (0, pg_core_1.varchar)("min_margin_met_", { length: 255 }),
    marginPercent: (0, pg_core_1.varchar)("margin_percent_", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 255 }),
    meltable: (0, pg_core_1.text)("meltable"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagOld: (0, pg_core_1.bigint)("flag_old", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUserDiscard: (0, pg_core_1.bigint)("id_user_discard", { mode: "number" }),
    updatedAtDiscard: (0, pg_core_1.timestamp)("updated_at_discard", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagHistoric: (0, pg_core_1.bigint)("flag_historic", { mode: "number" }).default(0),
}, function (table) {
    return {
        idxPublicUnifiedResponseProgramsF2AmzOutOfStock90: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_amz_out_of_stock_90").on(table.amzOutOfStock90),
        idxPublicUnifiedResponseProgramsF2Asin: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_asin").on(table.asin),
        idxPublicUnifiedResponseProgramsF2Brand: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_brand").on(table.brand),
        idxPublicUnifiedResponseProgramsF2Category: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_category").on(table.category),
        idxPublicUnifiedResponseProgramsF2CreatedAt: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_created_at").on(table.createdAt),
        idxPublicUnifiedResponseProgramsF2Fba3PartPrice: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_fba_3_part_price").on(table.fba3PartPrice),
        idxPublicUnifiedResponseProgramsF2FullFillmentFee: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_full_fillment_fee").on(table.fullFillmentFee),
        idxPublicUnifiedResponseProgramsF2InStock: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_in_stock").on(table.inStock),
        idxPublicUnifiedResponseProgramsF2MarginFromCurrentFba: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_margin_from_current_fba").on(table.marginFromCurrentFbaPrice),
        idxPublicUnifiedResponseProgramsF2MarginPercent: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_margin_percent").on(table.marginPercent),
        idxPublicUnifiedResponseProgramsF2MarginPercent: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_margin_percent_").on(table.marginPercent),
        idxPublicUnifiedResponseProgramsF2MfnPrice: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_mfn_price").on(table.mfnPrice),
        idxPublicUnifiedResponseProgramsF2MinMarginMet: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_min_margin_met").on(table.minMarginMet),
        idxPublicUnifiedResponseProgramsF2MinMarginMet: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_min_margin_met_").on(table.minMarginMet),
        idxPublicUnifiedResponseProgramsF2NetProfit: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_net_profit").on(table.netProfit),
        idxPublicUnifiedResponseProgramsF2New: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_new").on(table.new),
        idxPublicUnifiedResponseProgramsF2Phase2Notes: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_phase_2_notes").on(table.phase2Notes),
        idxPublicUnifiedResponseProgramsF2ProductReviews: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_product_reviews").on(table.reviews),
        idxPublicUnifiedResponseProgramsF2ProductSize: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_product_size").on(table.productSize),
        idxPublicUnifiedResponseProgramsF2ReferalFee: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_referal_fee").on(table.referalFee),
        idxPublicUnifiedResponseProgramsF2ReferalFeeBasedOnCu: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_referal_fee_based_on_cu").on(table.referalFeeBasedOnCurrentPrice),
        idxPublicUnifiedResponseProgramsF2ReferalPercent: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_referal_percent").on(table.referalPercent),
        idxPublicUnifiedResponseProgramsF2RequestedSellingUnits: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_requested_selling_units").on(table.requestedSellingUnitsOrder),
        idxPublicUnifiedResponseProgramsF2Restock: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_restock").on(table.restock),
        idxPublicUnifiedResponseProgramsF2Roi: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_roi").on(table.roi),
        idxPublicUnifiedResponseProgramsF2RoiExcludingPrep: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_roi_excluding_prep").on(table.roiExcludingPrep),
        idxPublicUnifiedResponseProgramsF2SalesRankCurrent: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_sales_rank_current").on(table.salesRankCurrent),
        idxPublicUnifiedResponseProgramsF2SalesRankReference: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_sales_rank_reference").on(table.salesRankReference),
        idxPublicUnifiedResponseProgramsF2Snl: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_snl").on(table.snl),
        idxPublicUnifiedResponseProgramsF2SupplierSku: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_supplier_sku").on(table.supplierSku),
        idxPublicUnifiedResponseProgramsF2UpdatedAt: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_updated_at").on(table.updatedAt),
        idxPublicUnifiedResponseProgramsF2Variation: (0, pg_core_1.index)("idx_public_unified_response_programs_f2_variation").on(table.variation),
    };
});
exports.refunds = (0, pg_core_1.pgTable)("refunds", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('refunds_id_seq', regclass)).primaryKey().notNull(),
    amazonOrderId: (0, pg_core_1.text)("amazon_order_id"),
    sellerOrderId: (0, pg_core_1.text)("seller_order_id"),
    postedDate: (0, pg_core_1.timestamp)("posted_date", { precision: 2, withTimezone: true, mode: 'string' }),
    sellerSku: (0, pg_core_1.text)("seller_sku"),
    orderAdjustmentItemId: (0, pg_core_1.text)("order_adjustment_item_id"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    quantity: (0, pg_core_1.bigint)("quantity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    principal: (0, pg_core_1.bigint)("principal", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    commission: (0, pg_core_1.bigint)("commission", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    refundCommission: (0, pg_core_1.bigint)("refund_commission", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    key: (0, pg_core_1.text)("key"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
}, function (table) {
    return {
        idxPublicRefundsOrderAdjustmentItemId: (0, pg_core_1.index)("idx_public_refunds_order_adjustment_item_id").on(table.orderAdjustmentItemId),
    };
});
exports.unifiedResponseProgramsF3 = (0, pg_core_1.pgTable)("unified_response_programs_f3", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current"),
    salesRankReference: (0, pg_core_1.text)("sales_rank_reference"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    reviews: (0, pg_core_1.text)("reviews"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesKeeepa: (0, pg_core_1.bigint)("sales_keeepa", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAz: (0, pg_core_1.bigint)("sales_az", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank306090: (0, pg_core_1.bigint)("sales_rank_30_60_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUnifiedResponseProgramsF2: (0, pg_core_1.bigint)("id_unified_response_programs_f2", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalFeeBasedOnCurrentPrice: (0, pg_core_1.bigint)("referal_fee_based_on_current_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginPercent: (0, pg_core_1.bigint)("margin_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginFromCurrentFbaPrice: (0, pg_core_1.bigint)("margin_from_current_fba_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roiExcludingPrep: (0, pg_core_1.bigint)("roi_excluding_prep", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minMarginMet: (0, pg_core_1.bigint)("min_margin_met", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inStock: (0, pg_core_1.bigint)("in_stock", { mode: "number" }),
    restock: (0, pg_core_1.integer)("restock"),
    new: (0, pg_core_1.integer)("new"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mfnPrice: (0, pg_core_1.bigint)("mfn_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amzOutOfStock90: (0, pg_core_1.bigint)("amz_out_of_stock_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedSellingUnitsOrder: (0, pg_core_1.bigint)("requested_selling_units_order", { mode: "number" }),
    phase2Notes: (0, pg_core_1.varchar)("phase_2_notes", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba3PartPrice: (0, pg_core_1.bigint)("fba_3_part_price", { mode: "number" }),
    referalPercent: (0, pg_core_1.varchar)("referal_percent", { length: 255 }),
    referalFee: (0, pg_core_1.varchar)("referal_fee", { length: 255 }),
    roi: (0, pg_core_1.varchar)("roi", { length: 255 }),
    snl: (0, pg_core_1.varchar)("snl", { length: 255 }),
    minMarginMet: (0, pg_core_1.varchar)("min_margin_met_", { length: 255 }),
    marginPercent: (0, pg_core_1.varchar)("margin_percent_", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    notaF2: (0, pg_core_1.text)("nota_f2"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    origin: (0, pg_core_1.bigint)("origin", { mode: "number" }).default(0),
});
exports.reporteDistributorRankMarginBase = (0, pg_core_1.pgTable)("reporte_distributor_rank_margin_base", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8: (0, pg_core_1.bigint)("total_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8: (0, pg_core_1.bigint)("total_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250: (0, pg_core_1.bigint)("total_1250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8: (0, pg_core_1.bigint)("total_1250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8: (0, pg_core_1.bigint)("total_1250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
});
exports.reporteEmision = (0, pg_core_1.pgTable)("reporte_emision", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    poNumber: (0, pg_core_1.bigint)("po_number", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    poBox: (0, pg_core_1.bigint)("po_box", { mode: "number" }),
    unitCost: (0, pg_core_1.numeric)("unit_cost"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    distributors: (0, pg_core_1.varchar)("distributors", { length: 256 }),
    fechaEmision: (0, pg_core_1.date)("fecha_emision"),
});
exports.reporteF1 = (0, pg_core_1.pgTable)("reporte_f1", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amarillo: (0, pg_core_1.bigint)("amarillo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    azul: (0, pg_core_1.bigint)("azul", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoAprobado: (0, pg_core_1.bigint)("enviado_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoRechazado: (0, pg_core_1.bigint)("enviado_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
});
exports.reporteF1Distributor = (0, pg_core_1.pgTable)("reporte_f1_distributor", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amarillo: (0, pg_core_1.bigint)("amarillo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    azul: (0, pg_core_1.bigint)("azul", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoAprobado: (0, pg_core_1.bigint)("enviado_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoRechazado: (0, pg_core_1.bigint)("enviado_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
});
exports.unifiedResponseProgramsFilters = (0, pg_core_1.pgTable)("unified_response_programs_filters", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('unified_response_programs_filters_id_seq', regclass)).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilters: (0, pg_core_1.bigint)("id_filters", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUnifiedResponsePrograms: (0, pg_core_1.bigint)("id_unified_response_programs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    typeValidator: (0, pg_core_1.bigint)("type_validator", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    updateAtAprobado: (0, pg_core_1.timestamp)("update_at_aprobado", { withTimezone: true, mode: 'string' }),
}, function (table) {
    return {
        idxPublicUnifiedResponseProgramsFiltersCreatedAt: (0, pg_core_1.index)("idx_public_unified_response_programs_filters_created_at").on(table.createdAt),
        idxPublicUnifiedResponseProgramsFiltersId: (0, pg_core_1.index)("idx_public_unified_response_programs_filters_id").on(table.id),
        idxPublicUnifiedResponseProgramsFiltersIdFilters: (0, pg_core_1.index)("idx_public_unified_response_programs_filters_id_filters").on(table.idFilters),
        idxPublicUnifiedResponseProgramsFiltersIdIdUnifiedResp: (0, pg_core_1.index)("idx_public_unified_response_programs_filters_id_id_unified_resp").on(table.idUnifiedResponsePrograms),
        idxPublicUnifiedResponseProgramsFiltersIdUnifiedRespons: (0, pg_core_1.index)("idx_public_unified_response_programs_filters_id_unified_respons").on(table.idUnifiedResponsePrograms),
        idxPublicUnifiedResponseProgramsUpdatedAt: (0, pg_core_1.index)("idx_public_unified_response_programs_updated_at").on(table.updatedAt),
    };
});
exports.reporteF1RankMarginUsers = (0, pg_core_1.pgTable)("reporte_f1_rank_margin_users", {
    concat: (0, pg_core_1.text)("concat"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAsignado: (0, pg_core_1.bigint)("total_asignado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    countRevisado: (0, pg_core_1.bigint)("count_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante: (0, pg_core_1.bigint)("total_restante", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteMayor8: (0, pg_core_1.bigint)("total_restante_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteMenor8: (0, pg_core_1.bigint)("total_restante_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante140: (0, pg_core_1.bigint)("total_restante_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante140Mayor8: (0, pg_core_1.bigint)("total_restante_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante140Menor8: (0, pg_core_1.bigint)("total_restante_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado140: (0, pg_core_1.bigint)("total_revisado_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado140Mayor8: (0, pg_core_1.bigint)("total_revisado_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado140Menor8: (0, pg_core_1.bigint)("total_revisado_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante4070: (0, pg_core_1.bigint)("total_restante_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante4070Mayor8: (0, pg_core_1.bigint)("total_restante_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante4070Menor8: (0, pg_core_1.bigint)("total_restante_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado4070: (0, pg_core_1.bigint)("total_revisado_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado4070Mayor8: (0, pg_core_1.bigint)("total_revisado_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado4070Menor8: (0, pg_core_1.bigint)("total_revisado_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante70100: (0, pg_core_1.bigint)("total_restante_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante70100Mayor8: (0, pg_core_1.bigint)("total_restante_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante70100Menor8: (0, pg_core_1.bigint)("total_restante_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado70100: (0, pg_core_1.bigint)("total_revisado_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado70100Mayor8: (0, pg_core_1.bigint)("total_revisado_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado70100Menor8: (0, pg_core_1.bigint)("total_revisado_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante100250: (0, pg_core_1.bigint)("total_restante_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante100250Mayor8: (0, pg_core_1.bigint)("total_restante_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante100250Menor8: (0, pg_core_1.bigint)("total_restante_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado100250: (0, pg_core_1.bigint)("total_revisado_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado100250Mayor8: (0, pg_core_1.bigint)("total_revisado_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado100250Menor8: (0, pg_core_1.bigint)("total_revisado_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante0: (0, pg_core_1.bigint)("total_restante_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante0Mayor8: (0, pg_core_1.bigint)("total_restante_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante0Menor8: (0, pg_core_1.bigint)("total_restante_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado0: (0, pg_core_1.bigint)("total_revisado_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado0Mayor8: (0, pg_core_1.bigint)("total_revisado_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado0Menor8: (0, pg_core_1.bigint)("total_revisado_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteM250: (0, pg_core_1.bigint)("total_restante_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteM250Mayor8: (0, pg_core_1.bigint)("total_restante_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteM250Menor8: (0, pg_core_1.bigint)("total_restante_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoM250: (0, pg_core_1.bigint)("total_revisado_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoM250Mayor8: (0, pg_core_1.bigint)("total_revisado_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoM250Menor8: (0, pg_core_1.bigint)("total_revisado_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilters: (0, pg_core_1.bigint)("id_filters", { mode: "number" }),
});
exports.reporteF1Restock = (0, pg_core_1.pgTable)("reporte_f1_restock", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amarillo: (0, pg_core_1.bigint)("amarillo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    azul: (0, pg_core_1.bigint)("azul", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoAprobado: (0, pg_core_1.bigint)("enviado_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoRechazado: (0, pg_core_1.bigint)("enviado_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
});
exports.reporteF2 = (0, pg_core_1.pgTable)("reporte_f2", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amarillo: (0, pg_core_1.bigint)("amarillo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aprobado: (0, pg_core_1.bigint)("aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desaprobado: (0, pg_core_1.bigint)("desaprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
});
exports.unifiedResponsePrograms = (0, pg_core_1.pgTable)("unified_response_programs", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('unified_response_programs_id_seq', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current").default(0),
    salesRankReference: (0, pg_core_1.text)("sales_rank_reference"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    reviews: (0, pg_core_1.text)("reviews"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesKeeepa: (0, pg_core_1.bigint)("sales_keeepa", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAz: (0, pg_core_1.bigint)("sales_az", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank306090: (0, pg_core_1.bigint)("sales_rank_30_60_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aproveTeam1: (0, pg_core_1.bigint)("aprove_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aproveTeam2: (0, pg_core_1.bigint)("aprove_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aproveTeam3: (0, pg_core_1.bigint)("aprove_team_3", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    notaTeam1: (0, pg_core_1.varchar)("nota_team_1", { length: 255 }),
    notaTeam2: (0, pg_core_1.varchar)("nota_team_2", { length: 255 }),
    notaTeam3: (0, pg_core_1.varchar)("nota_team_3", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba3PartPrice: (0, pg_core_1.bigint)("fba_3_part_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mfnPrice: (0, pg_core_1.bigint)("mfn_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amzOutOfStock90: (0, pg_core_1.bigint)("amz_out_of_stock_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    meltable: (0, pg_core_1.text)("meltable"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    isVariation: (0, pg_core_1.bigint)("is_variation", { mode: "number" }).default(0),
    lastDateUpdate: (0, pg_core_1.timestamp)("last_date_update", { withTimezone: true, mode: 'string' }).defaultNow(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    meltableDecember: (0, pg_core_1.bigint)("meltable_december", { mode: "number" }).default(0),
    salesRankCurrentActual: (0, pg_core_1.text)("sales_rank_current_actual"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagOld: (0, pg_core_1.bigint)("flag_old", { mode: "number" }).default(0),
}, function (table) {
    return {
        idxPublicUnifiedResponseProgramsAsin: (0, pg_core_1.index)("idx_public_unified_response_programs_asin").on(table.asin),
        idxPublicUnifiedResponseProgramsBrand: (0, pg_core_1.index)("idx_public_unified_response_programs_brand").on(table.brand),
        idxPublicUnifiedResponseProgramsCategory: (0, pg_core_1.index)("idx_public_unified_response_programs_category").on(table.category),
        idxPublicUnifiedResponseProgramsId: (0, pg_core_1.index)("idx_public_unified_response_programs_id").on(table.id),
        idxPublicUnifiedResponseProgramsMargin: (0, pg_core_1.index)("idx_public_unified_response_programs_margin").on(table.margin),
        idxPublicUnifiedResponseProgramsNotaTeam1: (0, pg_core_1.index)("idx_public_unified_response_programs_nota_team_1").on(table.notaTeam1),
        idxPublicUnifiedResponseProgramsProductSize: (0, pg_core_1.index)("idx_public_unified_response_programs_product_size").on(table.productSize),
        idxPublicUnifiedResponseProgramsReviews: (0, pg_core_1.index)("idx_public_unified_response_programs_reviews").on(table.reviews),
        idxPublicUnifiedResponseProgramsSalesRankCurrent: (0, pg_core_1.index)("idx_public_unified_response_programs_sales_rank_current").on(table.salesRankCurrent),
        idxPublicUnifiedResponseProgramsSalesRankReference: (0, pg_core_1.index)("idx_public_unified_response_programs_sales_rank_reference").on(table.salesRankReference),
        idxPublicUnifiedResponseProgramsSupplierSku: (0, pg_core_1.index)("idx_public_unified_response_programs_supplier_sku").on(table.supplierSku),
    };
});
exports.reporteF2AvgMargin = (0, pg_core_1.pgTable)("reporte_f2_avg_margin", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadDisponible: (0, pg_core_1.bigint)("cantidad_disponible", { mode: "number" }),
    avgMargin: (0, pg_core_1.numeric)("avg_margin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    f2140CantidadDisponible: (0, pg_core_1.bigint)("f2_140_cantidad_disponible", { mode: "number" }),
    f2140AvgMargin: (0, pg_core_1.numeric)("f2_140_avg_margin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    f24070CantidadDisponible: (0, pg_core_1.bigint)("f2_4070_cantidad_disponible", { mode: "number" }),
    f24070AvgMargin: (0, pg_core_1.numeric)("f2_4070_avg_margin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    f270100CantidadDisponible: (0, pg_core_1.bigint)("f2_70100_cantidad_disponible", { mode: "number" }),
    f270100AvgMargin: (0, pg_core_1.numeric)("f2_70100_avg_margin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    f2100250CantidadDisponible: (0, pg_core_1.bigint)("f2_100250_cantidad_disponible", { mode: "number" }),
    f2100250AvgMargin: (0, pg_core_1.numeric)("f2_100250_avg_margin"),
});
exports.reporteF2Distributor = (0, pg_core_1.pgTable)("reporte_f2_distributor", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amarillo: (0, pg_core_1.bigint)("amarillo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aprobado: (0, pg_core_1.bigint)("aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desaprobado: (0, pg_core_1.bigint)("desaprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
});
exports.reporteF2TotalCost = (0, pg_core_1.pgTable)("reporte_f2_total_cost", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadAsinRevisado: (0, pg_core_1.bigint)("cantidad_asin_revisado", { mode: "number" }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reporteF3 = (0, pg_core_1.pgTable)("reporte_f3", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    azul: (0, pg_core_1.bigint)("azul", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
});
exports.reporteF3Distributor = (0, pg_core_1.pgTable)("reporte_f3_distributor", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    azul: (0, pg_core_1.bigint)("azul", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalHoy: (0, pg_core_1.bigint)("total_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
});
exports.reporteF4 = (0, pg_core_1.pgTable)("reporte_f4", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    porEmitir: (0, pg_core_1.bigint)("por_emitir", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    emitido: (0, pg_core_1.bigint)("emitido", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    revisadosHoy: (0, pg_core_1.bigint)("revisados_hoy", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    totalCostPorEmitir: (0, pg_core_1.numeric)("total_cost_por_emitir"),
    totalCostEmitido: (0, pg_core_1.numeric)("total_cost_emitido"),
    totalCostAsignado: (0, pg_core_1.numeric)("total_cost_asignado"),
});
exports.reporteF4SinEmitir = (0, pg_core_1.pgTable)("reporte_f4_sin_emitir", {
    asin: (0, pg_core_1.text)("asin"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    distributors: (0, pg_core_1.varchar)("distributors", { length: 256 }),
});
exports.reporteGeneralF2 = (0, pg_core_1.pgTable)("reporte_general_f2", {
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadAsinRevisado: (0, pg_core_1.bigint)("cantidad_asin_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aprobado: (0, pg_core_1.bigint)("aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desaprobado: (0, pg_core_1.bigint)("desaprobado", { mode: "number" }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    horaInicio: (0, pg_core_1.time)("hora_inicio"),
    horaFin: (0, pg_core_1.time)("hora_fin"),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reporteMamalon2Juan = (0, pg_core_1.pgTable)("reporte_mamalon_2_juan", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinRevisar: (0, pg_core_1.bigint)("total_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Revisado: (0, pg_core_1.bigint)("total_140_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8SinRevisar: (0, pg_core_1.bigint)("total_140_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Revisado: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8SinRevisar: (0, pg_core_1.bigint)("total_4070_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Reviado: (0, pg_core_1.bigint)("total_70100_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8SinRevisar: (0, pg_core_1.bigint)("total_70100_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Reviado: (0, pg_core_1.bigint)("total_100250_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_100250_mayor_8_sin_revisar", { mode: "number" }),
});
exports.reporteMamalon = (0, pg_core_1.pgTable)("reporte_mamalon", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalConCheckT1T2T3: (0, pg_core_1.bigint)("total_con_check_t1_t2_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinCheckT1T2T3: (0, pg_core_1.bigint)("total_sin_check_t1_t2_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoTeam1: (0, pg_core_1.bigint)("total_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoTeam2: (0, pg_core_1.bigint)("total_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoTeam3: (0, pg_core_1.bigint)("total_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalFaltaCheckT1: (0, pg_core_1.bigint)("total_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalFaltaCheckT2: (0, pg_core_1.bigint)("total_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalFaltaCheckT3: (0, pg_core_1.bigint)("total_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8: (0, pg_core_1.bigint)("total_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8: (0, pg_core_1.bigint)("total_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8RevisadoTeam1: (0, pg_core_1.bigint)("total_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8RevisadoTeam2: (0, pg_core_1.bigint)("total_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8RevisadoTeam3: (0, pg_core_1.bigint)("total_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8FaltaCheckT1: (0, pg_core_1.bigint)("total_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8FaltaCheckT2: (0, pg_core_1.bigint)("total_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8FaltaCheckT3: (0, pg_core_1.bigint)("total_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250: (0, pg_core_1.bigint)("total_1250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250RevisadoTeam1: (0, pg_core_1.bigint)("total_1250_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250RevisadoTeam2: (0, pg_core_1.bigint)("total_1250_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250RevisadoTeam3: (0, pg_core_1.bigint)("total_1250_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250FaltaCheckT1: (0, pg_core_1.bigint)("total_1250_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250FaltaCheckT2: (0, pg_core_1.bigint)("total_1250_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250FaltaCheckT3: (0, pg_core_1.bigint)("total_1250_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8: (0, pg_core_1.bigint)("total_1250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_1250_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_1250_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_1250_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8: (0, pg_core_1.bigint)("total_1250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_1250_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_1250_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_1250_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_1250_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_1250_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_1250_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140RevisadoTeam1: (0, pg_core_1.bigint)("total_140_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140RevisadoTeam2: (0, pg_core_1.bigint)("total_140_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140RevisadoTeam3: (0, pg_core_1.bigint)("total_140_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140FaltaCheckT1: (0, pg_core_1.bigint)("total_140_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140FaltaCheckT2: (0, pg_core_1.bigint)("total_140_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140FaltaCheckT3: (0, pg_core_1.bigint)("total_140_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_140_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_140_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_140_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_140_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_140_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_140_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_140_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_140_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_140_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_140_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_140_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_140_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070RevisadoTeam1: (0, pg_core_1.bigint)("total_4070_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070RevisadoTeam2: (0, pg_core_1.bigint)("total_4070_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070RevisadoTeam3: (0, pg_core_1.bigint)("total_4070_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070FaltaCheckT1: (0, pg_core_1.bigint)("total_4070_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070FaltaCheckT2: (0, pg_core_1.bigint)("total_4070_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070FaltaCheckT3: (0, pg_core_1.bigint)("total_4070_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_4070_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_4070_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_4070_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_4070_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_4070_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_4070_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_4070_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_4070_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_4070_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100RevisadoTeam1: (0, pg_core_1.bigint)("total_70100_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100RevisadoTeam2: (0, pg_core_1.bigint)("total_70100_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100RevisadoTeam3: (0, pg_core_1.bigint)("total_70100_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100FaltaCheckT1: (0, pg_core_1.bigint)("total_70100_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100FaltaCheckT2: (0, pg_core_1.bigint)("total_70100_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100FaltaCheckT3: (0, pg_core_1.bigint)("total_70100_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_70100_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_70100_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_70100_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_70100_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_70100_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_70100_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_70100_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_70100_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_70100_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_70100_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_70100_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_70100_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250RevisadoTeam1: (0, pg_core_1.bigint)("total_100250_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250RevisadoTeam2: (0, pg_core_1.bigint)("total_100250_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250RevisadoTeam3: (0, pg_core_1.bigint)("total_100250_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250FaltaCheckT1: (0, pg_core_1.bigint)("total_100250_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250FaltaCheckT2: (0, pg_core_1.bigint)("total_100250_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250FaltaCheckT3: (0, pg_core_1.bigint)("total_100250_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_100250_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_100250_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_100250_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_100250_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_100250_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_100250_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_100250_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_100250_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_100250_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_100250_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_100250_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_100250_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0RevisadoTeam1: (0, pg_core_1.bigint)("total_0_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0RevisadoTeam2: (0, pg_core_1.bigint)("total_0_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0RevisadoTeam3: (0, pg_core_1.bigint)("total_0_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0FaltaCheckT1: (0, pg_core_1.bigint)("total_0_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0FaltaCheckT2: (0, pg_core_1.bigint)("total_0_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0FaltaCheckT3: (0, pg_core_1.bigint)("total_0_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_0_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_0_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_0_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_0_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_0_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_0_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_0_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_0_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_0_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_0_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_0_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_0_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250RevisadoTeam1: (0, pg_core_1.bigint)("total_m250_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250RevisadoTeam2: (0, pg_core_1.bigint)("total_m250_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250RevisadoTeam3: (0, pg_core_1.bigint)("total_m250_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250FaltaCheckT1: (0, pg_core_1.bigint)("total_m250_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250FaltaCheckT2: (0, pg_core_1.bigint)("total_m250_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250FaltaCheckT3: (0, pg_core_1.bigint)("total_m250_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_m250_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_m250_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_m250_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_m250_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_m250_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_m250_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_m250_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_m250_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_m250_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_m250_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_m250_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_m250_menor_8_falta_check_t3", { mode: "number" }),
});
exports.reporteMamalon2 = (0, pg_core_1.pgTable)("reporte_mamalon_2", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalConCheckT1T2T3: (0, pg_core_1.bigint)("total_con_check_t1_t2_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinCheckT1T2T3: (0, pg_core_1.bigint)("total_sin_check_t1_t2_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoTeam1: (0, pg_core_1.bigint)("total_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoTeam2: (0, pg_core_1.bigint)("total_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoTeam3: (0, pg_core_1.bigint)("total_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalFaltaCheckT1: (0, pg_core_1.bigint)("total_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalFaltaCheckT2: (0, pg_core_1.bigint)("total_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalFaltaCheckT3: (0, pg_core_1.bigint)("total_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8: (0, pg_core_1.bigint)("total_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8: (0, pg_core_1.bigint)("total_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8RevisadoTeam1: (0, pg_core_1.bigint)("total_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8RevisadoTeam2: (0, pg_core_1.bigint)("total_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8RevisadoTeam3: (0, pg_core_1.bigint)("total_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8FaltaCheckT1: (0, pg_core_1.bigint)("total_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8FaltaCheckT2: (0, pg_core_1.bigint)("total_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8FaltaCheckT3: (0, pg_core_1.bigint)("total_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250: (0, pg_core_1.bigint)("total_1250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Revisado: (0, pg_core_1.bigint)("total_1250_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250RevisadoTeam1: (0, pg_core_1.bigint)("total_1250_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250RevisadoTeam2: (0, pg_core_1.bigint)("total_1250_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250RevisadoTeam3: (0, pg_core_1.bigint)("total_1250_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250FaltaCheckT1: (0, pg_core_1.bigint)("total_1250_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250FaltaCheckT2: (0, pg_core_1.bigint)("total_1250_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250FaltaCheckT3: (0, pg_core_1.bigint)("total_1250_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8: (0, pg_core_1.bigint)("total_1250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8Revisado: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_1250_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_1250_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_1250_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_1250_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8: (0, pg_core_1.bigint)("total_1250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8Revisado: (0, pg_core_1.bigint)("total_1250_menor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_1250_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_1250_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_1250_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_1250_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_1250_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_1250_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Revisado: (0, pg_core_1.bigint)("total_140_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140RevisadoTeam1: (0, pg_core_1.bigint)("total_140_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140RevisadoTeam2: (0, pg_core_1.bigint)("total_140_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140RevisadoTeam3: (0, pg_core_1.bigint)("total_140_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140FaltaCheckT1: (0, pg_core_1.bigint)("total_140_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140FaltaCheckT2: (0, pg_core_1.bigint)("total_140_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140FaltaCheckT3: (0, pg_core_1.bigint)("total_140_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Revisado: (0, pg_core_1.bigint)("total_140_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_140_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_140_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_140_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_140_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_140_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_140_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8Revisado: (0, pg_core_1.bigint)("total_140_menor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_140_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_140_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_140_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_140_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_140_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_140_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Revisado: (0, pg_core_1.bigint)("total_4070_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070RevisadoTeam1: (0, pg_core_1.bigint)("total_4070_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070RevisadoTeam2: (0, pg_core_1.bigint)("total_4070_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070RevisadoTeam3: (0, pg_core_1.bigint)("total_4070_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070FaltaCheckT1: (0, pg_core_1.bigint)("total_4070_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070FaltaCheckT2: (0, pg_core_1.bigint)("total_4070_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070FaltaCheckT3: (0, pg_core_1.bigint)("total_4070_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Revisado: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_4070_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_4070_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_4070_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8Revisado: (0, pg_core_1.bigint)("total_4070_menor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_4070_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_4070_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_4070_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_4070_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_4070_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_4070_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Revisado: (0, pg_core_1.bigint)("total_70100_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100RevisadoTeam1: (0, pg_core_1.bigint)("total_70100_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100RevisadoTeam2: (0, pg_core_1.bigint)("total_70100_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100RevisadoTeam3: (0, pg_core_1.bigint)("total_70100_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100FaltaCheckT1: (0, pg_core_1.bigint)("total_70100_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100FaltaCheckT2: (0, pg_core_1.bigint)("total_70100_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100FaltaCheckT3: (0, pg_core_1.bigint)("total_70100_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Reviado: (0, pg_core_1.bigint)("total_70100_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_70100_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_70100_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_70100_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_70100_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_70100_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_70100_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8Reviado: (0, pg_core_1.bigint)("total_70100_menor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_70100_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_70100_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_70100_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_70100_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_70100_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_70100_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Reviado: (0, pg_core_1.bigint)("total_100250_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250RevisadoTeam1: (0, pg_core_1.bigint)("total_100250_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250RevisadoTeam2: (0, pg_core_1.bigint)("total_100250_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250RevisadoTeam3: (0, pg_core_1.bigint)("total_100250_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250FaltaCheckT1: (0, pg_core_1.bigint)("total_100250_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250FaltaCheckT2: (0, pg_core_1.bigint)("total_100250_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250FaltaCheckT3: (0, pg_core_1.bigint)("total_100250_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Reviado: (0, pg_core_1.bigint)("total_100250_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_100250_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_100250_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_100250_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_100250_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_100250_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_100250_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8Reviado: (0, pg_core_1.bigint)("total_100250_menor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_100250_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_100250_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_100250_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_100250_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_100250_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_100250_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Reviado: (0, pg_core_1.bigint)("total_0_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0RevisadoTeam1: (0, pg_core_1.bigint)("total_0_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0RevisadoTeam2: (0, pg_core_1.bigint)("total_0_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0RevisadoTeam3: (0, pg_core_1.bigint)("total_0_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0FaltaCheckT1: (0, pg_core_1.bigint)("total_0_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0FaltaCheckT2: (0, pg_core_1.bigint)("total_0_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0FaltaCheckT3: (0, pg_core_1.bigint)("total_0_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8Reviado: (0, pg_core_1.bigint)("total_0_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_0_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_0_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_0_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_0_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_0_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_0_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8Reviado: (0, pg_core_1.bigint)("total_0_menor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_0_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_0_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_0_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_0_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_0_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_0_menor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Reviado: (0, pg_core_1.bigint)("total_m250_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250RevisadoTeam1: (0, pg_core_1.bigint)("total_m250_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250RevisadoTeam2: (0, pg_core_1.bigint)("total_m250_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250RevisadoTeam3: (0, pg_core_1.bigint)("total_m250_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250FaltaCheckT1: (0, pg_core_1.bigint)("total_m250_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250FaltaCheckT2: (0, pg_core_1.bigint)("total_m250_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250FaltaCheckT3: (0, pg_core_1.bigint)("total_m250_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8Reviado: (0, pg_core_1.bigint)("total_m250_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8RevisadoTeam1: (0, pg_core_1.bigint)("total_m250_mayor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8RevisadoTeam2: (0, pg_core_1.bigint)("total_m250_mayor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8RevisadoTeam3: (0, pg_core_1.bigint)("total_m250_mayor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8FaltaCheckT1: (0, pg_core_1.bigint)("total_m250_mayor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8FaltaCheckT2: (0, pg_core_1.bigint)("total_m250_mayor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8FaltaCheckT3: (0, pg_core_1.bigint)("total_m250_mayor_8_falta_check_t3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8Reviado: (0, pg_core_1.bigint)("total_m250_menor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8RevisadoTeam1: (0, pg_core_1.bigint)("total_m250_menor_8_revisado_team_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8RevisadoTeam2: (0, pg_core_1.bigint)("total_m250_menor_8_revisado_team_2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8RevisadoTeam3: (0, pg_core_1.bigint)("total_m250_menor_8_revisado_team_3", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8FaltaCheckT1: (0, pg_core_1.bigint)("total_m250_menor_8_falta_check_t1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8FaltaCheckT2: (0, pg_core_1.bigint)("total_m250_menor_8_falta_check_t2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8FaltaCheckT3: (0, pg_core_1.bigint)("total_m250_menor_8_falta_check_t3", { mode: "number" }),
});
exports.borrarTablaUpc = (0, pg_core_1.pgTable)("borrar_tabla_upc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upcOld: (0, pg_core_1.text)("upc_old"),
    upcNew: (0, pg_core_1.text)("upc_new"),
});
exports.reporteMamalonF1Users = (0, pg_core_1.pgTable)("reporte_mamalon_f1_users", {
    concat: (0, pg_core_1.text)("concat"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAsignado: (0, pg_core_1.bigint)("total_asignado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    countRevisado: (0, pg_core_1.bigint)("count_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante: (0, pg_core_1.bigint)("total_restante", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteMayor8: (0, pg_core_1.bigint)("total_restante_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteMenor8: (0, pg_core_1.bigint)("total_restante_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante140: (0, pg_core_1.bigint)("total_restante_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante140Mayor8: (0, pg_core_1.bigint)("total_restante_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante140Menor8: (0, pg_core_1.bigint)("total_restante_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado140: (0, pg_core_1.bigint)("total_revisado_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado140Mayor8: (0, pg_core_1.bigint)("total_revisado_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado140Menor8: (0, pg_core_1.bigint)("total_revisado_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante4070: (0, pg_core_1.bigint)("total_restante_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante4070Mayor8: (0, pg_core_1.bigint)("total_restante_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante4070Menor8: (0, pg_core_1.bigint)("total_restante_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado4070: (0, pg_core_1.bigint)("total_revisado_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado4070Mayor8: (0, pg_core_1.bigint)("total_revisado_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado4070Menor8: (0, pg_core_1.bigint)("total_revisado_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante70100: (0, pg_core_1.bigint)("total_restante_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante70100Mayor8: (0, pg_core_1.bigint)("total_restante_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante70100Menor8: (0, pg_core_1.bigint)("total_restante_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado70100: (0, pg_core_1.bigint)("total_revisado_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado70100Mayor8: (0, pg_core_1.bigint)("total_revisado_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado70100Menor8: (0, pg_core_1.bigint)("total_revisado_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante100250: (0, pg_core_1.bigint)("total_restante_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante100250Mayor8: (0, pg_core_1.bigint)("total_restante_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante100250Menor8: (0, pg_core_1.bigint)("total_restante_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado100250: (0, pg_core_1.bigint)("total_revisado_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado100250Mayor8: (0, pg_core_1.bigint)("total_revisado_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado100250Menor8: (0, pg_core_1.bigint)("total_revisado_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante0: (0, pg_core_1.bigint)("total_restante_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante0Mayor8: (0, pg_core_1.bigint)("total_restante_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante0Menor8: (0, pg_core_1.bigint)("total_restante_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado0: (0, pg_core_1.bigint)("total_revisado_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado0Mayor8: (0, pg_core_1.bigint)("total_revisado_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado0Menor8: (0, pg_core_1.bigint)("total_revisado_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteM250: (0, pg_core_1.bigint)("total_restante_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteM250Mayor8: (0, pg_core_1.bigint)("total_restante_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestanteM250Menor8: (0, pg_core_1.bigint)("total_restante_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoM250: (0, pg_core_1.bigint)("total_revisado_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoM250Mayor8: (0, pg_core_1.bigint)("total_revisado_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisadoM250Menor8: (0, pg_core_1.bigint)("total_revisado_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilters: (0, pg_core_1.bigint)("id_filters", { mode: "number" }),
});
exports.reporteMamalonF2 = (0, pg_core_1.pgTable)("reporte_mamalon_f2", {
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAprobado: (0, pg_core_1.bigint)("total_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRechazado: (0, pg_core_1.bigint)("total_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinRevisar: (0, pg_core_1.bigint)("total_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8: (0, pg_core_1.bigint)("total_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8Aprobado: (0, pg_core_1.bigint)("total_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8Rechazado: (0, pg_core_1.bigint)("total_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8SinRevisar: (0, pg_core_1.bigint)("total_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8: (0, pg_core_1.bigint)("total_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8Aprobado: (0, pg_core_1.bigint)("total_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8SinRevisar: (0, pg_core_1.bigint)("total_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8Rechazado: (0, pg_core_1.bigint)("total_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250: (0, pg_core_1.bigint)("total_1250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Aprobado: (0, pg_core_1.bigint)("total_1250_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Rechazado: (0, pg_core_1.bigint)("total_1250_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250SinRevisar: (0, pg_core_1.bigint)("total_1250_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8: (0, pg_core_1.bigint)("total_1250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8Aprobado: (0, pg_core_1.bigint)("total_1250_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8Rechazado: (0, pg_core_1.bigint)("total_1250_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_1250_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8: (0, pg_core_1.bigint)("total_1250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8Aprobado: (0, pg_core_1.bigint)("total_1250_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8Rechazado: (0, pg_core_1.bigint)("total_1250_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8SinRevisar: (0, pg_core_1.bigint)("total_1250_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Aprobado: (0, pg_core_1.bigint)("total_140_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Rechazado: (0, pg_core_1.bigint)("total_140_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140SinRevisar: (0, pg_core_1.bigint)("total_140_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Aprobado: (0, pg_core_1.bigint)("total_140_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Rechazado: (0, pg_core_1.bigint)("total_140_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8SinRevisar: (0, pg_core_1.bigint)("total_140_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8Aprobado: (0, pg_core_1.bigint)("total_140_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8Rechazado: (0, pg_core_1.bigint)("total_140_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8SinRevisar: (0, pg_core_1.bigint)("total_140_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Aprobado: (0, pg_core_1.bigint)("total_4070_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Rechazado: (0, pg_core_1.bigint)("total_4070_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070SinRevisar: (0, pg_core_1.bigint)("total_4070_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Aprobado: (0, pg_core_1.bigint)("total_4070_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Rechazado: (0, pg_core_1.bigint)("total_4070_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8SinRevisar: (0, pg_core_1.bigint)("total_4070_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8Aprobado: (0, pg_core_1.bigint)("total_4070_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8Rechazado: (0, pg_core_1.bigint)("total_4070_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8SinRevisar: (0, pg_core_1.bigint)("total_4070_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Aprobado: (0, pg_core_1.bigint)("total_70100_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Rechazado: (0, pg_core_1.bigint)("total_70100_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100SinRevisar: (0, pg_core_1.bigint)("total_70100_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Aprobado: (0, pg_core_1.bigint)("total_70100_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Rechazado: (0, pg_core_1.bigint)("total_70100_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8SinRevisar: (0, pg_core_1.bigint)("total_70100_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8Aprobado: (0, pg_core_1.bigint)("total_70100_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8Rechazado: (0, pg_core_1.bigint)("total_70100_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8SinRevisar: (0, pg_core_1.bigint)("total_70100_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Aprobado: (0, pg_core_1.bigint)("total_100250_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Rechazado: (0, pg_core_1.bigint)("total_100250_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250SinRevisar: (0, pg_core_1.bigint)("total_100250_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Aprobado: (0, pg_core_1.bigint)("total_100250_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Rechazado: (0, pg_core_1.bigint)("total_100250_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_100250_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8Aprobado: (0, pg_core_1.bigint)("total_100250_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8Rechazado: (0, pg_core_1.bigint)("total_100250_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8SinRevisar: (0, pg_core_1.bigint)("total_100250_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Aprobado: (0, pg_core_1.bigint)("total_0_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Rechazado: (0, pg_core_1.bigint)("total_0_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0SinRevisar: (0, pg_core_1.bigint)("total_0_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8Aprobado: (0, pg_core_1.bigint)("total_0_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8Rechazado: (0, pg_core_1.bigint)("total_0_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8SinRevisar: (0, pg_core_1.bigint)("total_0_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8Aprobado: (0, pg_core_1.bigint)("total_0_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8Rechazado: (0, pg_core_1.bigint)("total_0_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8SinRevisar: (0, pg_core_1.bigint)("total_0_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Aprobado: (0, pg_core_1.bigint)("total_m250_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Rechazado: (0, pg_core_1.bigint)("total_m250_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250SinRevisar: (0, pg_core_1.bigint)("total_m250_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8Aprobado: (0, pg_core_1.bigint)("total_m250_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8Rechazado: (0, pg_core_1.bigint)("total_m250_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_m250_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8Aprobado: (0, pg_core_1.bigint)("total_m250_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8Rechazado: (0, pg_core_1.bigint)("total_m250_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8SinRevisar: (0, pg_core_1.bigint)("total_m250_menor_8_sin_revisar", { mode: "number" }),
});
exports.reporteMamalonF2Users = (0, pg_core_1.pgTable)("reporte_mamalon_f2_users", {
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAprobado: (0, pg_core_1.bigint)("total_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRechazado: (0, pg_core_1.bigint)("total_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinRevisar: (0, pg_core_1.bigint)("total_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8: (0, pg_core_1.bigint)("total_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8Aprobado: (0, pg_core_1.bigint)("total_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8Rechazado: (0, pg_core_1.bigint)("total_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMayor8SinRevisar: (0, pg_core_1.bigint)("total_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8: (0, pg_core_1.bigint)("total_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8Aprobado: (0, pg_core_1.bigint)("total_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8SinRevisar: (0, pg_core_1.bigint)("total_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalMenor8Rechazado: (0, pg_core_1.bigint)("total_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250: (0, pg_core_1.bigint)("total_1250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Aprobado: (0, pg_core_1.bigint)("total_1250_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Rechazado: (0, pg_core_1.bigint)("total_1250_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250SinRevisar: (0, pg_core_1.bigint)("total_1250_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8: (0, pg_core_1.bigint)("total_1250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8Aprobado: (0, pg_core_1.bigint)("total_1250_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8Rechazado: (0, pg_core_1.bigint)("total_1250_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_1250_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8: (0, pg_core_1.bigint)("total_1250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8Aprobado: (0, pg_core_1.bigint)("total_1250_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8Rechazado: (0, pg_core_1.bigint)("total_1250_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1250Menor8SinRevisar: (0, pg_core_1.bigint)("total_1250_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140: (0, pg_core_1.bigint)("total_140", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Aprobado: (0, pg_core_1.bigint)("total_140_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Rechazado: (0, pg_core_1.bigint)("total_140_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140SinRevisar: (0, pg_core_1.bigint)("total_140_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Aprobado: (0, pg_core_1.bigint)("total_140_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Rechazado: (0, pg_core_1.bigint)("total_140_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8SinRevisar: (0, pg_core_1.bigint)("total_140_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8: (0, pg_core_1.bigint)("total_140_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8Aprobado: (0, pg_core_1.bigint)("total_140_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8Rechazado: (0, pg_core_1.bigint)("total_140_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Menor8SinRevisar: (0, pg_core_1.bigint)("total_140_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070: (0, pg_core_1.bigint)("total_4070", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Aprobado: (0, pg_core_1.bigint)("total_4070_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Rechazado: (0, pg_core_1.bigint)("total_4070_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070SinRevisar: (0, pg_core_1.bigint)("total_4070_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Aprobado: (0, pg_core_1.bigint)("total_4070_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Rechazado: (0, pg_core_1.bigint)("total_4070_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8SinRevisar: (0, pg_core_1.bigint)("total_4070_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8: (0, pg_core_1.bigint)("total_4070_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8Aprobado: (0, pg_core_1.bigint)("total_4070_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8Rechazado: (0, pg_core_1.bigint)("total_4070_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Menor8SinRevisar: (0, pg_core_1.bigint)("total_4070_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100: (0, pg_core_1.bigint)("total_70100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Aprobado: (0, pg_core_1.bigint)("total_70100_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Rechazado: (0, pg_core_1.bigint)("total_70100_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100SinRevisar: (0, pg_core_1.bigint)("total_70100_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Aprobado: (0, pg_core_1.bigint)("total_70100_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Rechazado: (0, pg_core_1.bigint)("total_70100_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8SinRevisar: (0, pg_core_1.bigint)("total_70100_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8: (0, pg_core_1.bigint)("total_70100_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8Aprobado: (0, pg_core_1.bigint)("total_70100_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8Rechazado: (0, pg_core_1.bigint)("total_70100_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Menor8SinRevisar: (0, pg_core_1.bigint)("total_70100_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Aprobado: (0, pg_core_1.bigint)("total_100250_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Rechazado: (0, pg_core_1.bigint)("total_100250_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250SinRevisar: (0, pg_core_1.bigint)("total_100250_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Aprobado: (0, pg_core_1.bigint)("total_100250_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Rechazado: (0, pg_core_1.bigint)("total_100250_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_100250_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8: (0, pg_core_1.bigint)("total_100250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8Aprobado: (0, pg_core_1.bigint)("total_100250_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8Rechazado: (0, pg_core_1.bigint)("total_100250_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Menor8SinRevisar: (0, pg_core_1.bigint)("total_100250_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0: (0, pg_core_1.bigint)("total_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Aprobado: (0, pg_core_1.bigint)("total_0_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Rechazado: (0, pg_core_1.bigint)("total_0_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0SinRevisar: (0, pg_core_1.bigint)("total_0_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8: (0, pg_core_1.bigint)("total_0_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8Aprobado: (0, pg_core_1.bigint)("total_0_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8Rechazado: (0, pg_core_1.bigint)("total_0_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Mayor8SinRevisar: (0, pg_core_1.bigint)("total_0_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8: (0, pg_core_1.bigint)("total_0_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8Aprobado: (0, pg_core_1.bigint)("total_0_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8Rechazado: (0, pg_core_1.bigint)("total_0_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total0Menor8SinRevisar: (0, pg_core_1.bigint)("total_0_menor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250: (0, pg_core_1.bigint)("total_m250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Aprobado: (0, pg_core_1.bigint)("total_m250_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Rechazado: (0, pg_core_1.bigint)("total_m250_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250SinRevisar: (0, pg_core_1.bigint)("total_m250_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8: (0, pg_core_1.bigint)("total_m250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8Aprobado: (0, pg_core_1.bigint)("total_m250_mayor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8Rechazado: (0, pg_core_1.bigint)("total_m250_mayor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_m250_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8: (0, pg_core_1.bigint)("total_m250_menor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8Aprobado: (0, pg_core_1.bigint)("total_m250_menor_8_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8Rechazado: (0, pg_core_1.bigint)("total_m250_menor_8_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalM250Menor8SinRevisar: (0, pg_core_1.bigint)("total_m250_menor_8_sin_revisar", { mode: "number" }),
});
exports.reportePo = (0, pg_core_1.pgTable)("reporte_po", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    poUnits: (0, pg_core_1.numeric)("po_units"),
    unitCost: (0, pg_core_1.numeric)("unit_cost"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    poBox: (0, pg_core_1.numeric)("po_box"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagDicount: (0, pg_core_1.bigint)("flag_dicount", { mode: "number" }),
});
exports.reportePo2 = (0, pg_core_1.pgTable)("reporte_po_2", {
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    price: (0, pg_core_1.numeric)("price"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedBuyingUnits: (0, pg_core_1.bigint)("requested_buying_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    upc: (0, pg_core_1.text)("upc"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    fecha: (0, pg_core_1.timestamp)("fecha", { mode: 'string' }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 255 }),
    compradorResponsable: (0, pg_core_1.text)("comprador_responsable"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idF3: (0, pg_core_1.bigint)("id_f3", { mode: "number" }),
    idDistributor: (0, pg_core_1.integer)("id_distributor"),
    phase2Notes: (0, pg_core_1.text)("phase_2_notes"),
    typeProduct: (0, pg_core_1.text)("type_product"),
});
exports.reporteGeneralF2Nuevo = (0, pg_core_1.pgTable)("reporte_general_f2_nuevo", {
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadAsinRevisado: (0, pg_core_1.bigint)("cantidad_asin_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aprobado: (0, pg_core_1.bigint)("aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desaprobado: (0, pg_core_1.bigint)("desaprobado", { mode: "number" }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    horaInicio: (0, pg_core_1.timestamp)("hora_inicio", { mode: 'string' }),
    horaFin: (0, pg_core_1.timestamp)("hora_fin", { mode: 'string' }),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reportePoTotalFecha = (0, pg_core_1.pgTable)("reporte_po_total_fecha", {
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reporteRankDistributorRevisado = (0, pg_core_1.pgTable)("reporte_rank_distributor_revisado", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck140: (0, pg_core_1.bigint)("ranck_1_40", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck4070: (0, pg_core_1.bigint)("ranck_40_70", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck70100: (0, pg_core_1.bigint)("ranck_70_100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck100250: (0, pg_core_1.bigint)("ranck_100_250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck0: (0, pg_core_1.bigint)("ranck_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranckMayor250: (0, pg_core_1.bigint)("ranck_mayor_250", { mode: "number" }),
});
exports.reporteRankDistributorSinRevisar = (0, pg_core_1.pgTable)("reporte_rank_distributor_sin_revisar", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck140: (0, pg_core_1.bigint)("ranck_1_40", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck4070: (0, pg_core_1.bigint)("ranck_40_70", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck70100: (0, pg_core_1.bigint)("ranck_70_100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck100250: (0, pg_core_1.bigint)("ranck_100_250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck0: (0, pg_core_1.bigint)("ranck_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranckMayor250: (0, pg_core_1.bigint)("ranck_mayor_250", { mode: "number" }),
});
exports.reporteRankTeamMarginMayor8 = (0, pg_core_1.pgTable)("reporte_rank_team_margin_mayor8", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    team: (0, pg_core_1.bigint)("team", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAsignado: (0, pg_core_1.bigint)("total_asignado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante: (0, pg_core_1.bigint)("total_restante", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck140: (0, pg_core_1.bigint)("ranck_1_40", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck4070: (0, pg_core_1.bigint)("ranck_40_70", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck70100: (0, pg_core_1.bigint)("ranck_70_100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck0: (0, pg_core_1.bigint)("ranck_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranckMayor250: (0, pg_core_1.bigint)("ranck_mayor_250", { mode: "number" }),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reporteRankTeamMarginMenor8 = (0, pg_core_1.pgTable)("reporte_rank_team_margin_menor8", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    team: (0, pg_core_1.bigint)("team", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAsignado: (0, pg_core_1.bigint)("total_asignado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante: (0, pg_core_1.bigint)("total_restante", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck140: (0, pg_core_1.bigint)("ranck_1_40", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck4070: (0, pg_core_1.bigint)("ranck_40_70", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck70100: (0, pg_core_1.bigint)("ranck_70_100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck0: (0, pg_core_1.bigint)("ranck_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranckMayor250: (0, pg_core_1.bigint)("ranck_mayor_250", { mode: "number" }),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reporteRankTeamRevisado = (0, pg_core_1.pgTable)("reporte_rank_team_revisado", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    team: (0, pg_core_1.bigint)("team", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAsignado: (0, pg_core_1.bigint)("total_asignado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRestante: (0, pg_core_1.bigint)("total_restante", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalAprobado: (0, pg_core_1.bigint)("total_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck140: (0, pg_core_1.bigint)("ranck_1_40", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck4070: (0, pg_core_1.bigint)("ranck_40_70", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck70100: (0, pg_core_1.bigint)("ranck_70_100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranck0: (0, pg_core_1.bigint)("ranck_0", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ranckMayor250: (0, pg_core_1.bigint)("ranck_mayor_250", { mode: "number" }),
    fecha: (0, pg_core_1.date)("fecha"),
});
exports.reporteReasonDiscard = (0, pg_core_1.pgTable)("reporte_reason_discard", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    count: (0, pg_core_1.bigint)("count", { mode: "number" }),
    phase2Notes: (0, pg_core_1.text)("phase_2_notes"),
    type: (0, pg_core_1.text)("type"),
});
exports.reporteTotalesDistribuidor = (0, pg_core_1.pgTable)("reporte_totales_distribuidor", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    done: (0, pg_core_1.bigint)("done", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pending: (0, pg_core_1.bigint)("pending", { mode: "number" }),
});
exports.responseRocketPower = (0, pg_core_1.pgTable)("response_rocket_power", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('response_rocket_power_id_seq', regclass)).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    sizeTier: (0, pg_core_1.text)("size_tier"),
    salesRank: (0, pg_core_1.text)("sales_rank"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
});
exports.responseRocketPowerHistoric = (0, pg_core_1.pgTable)("response_rocket_power_historic", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('response_rocket_power_historic_id_seq', regclass)).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    sizeTier: (0, pg_core_1.text)("size_tier"),
    salesRank: (0, pg_core_1.text)("sales_rank"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyBoxPrice: (0, pg_core_1.bigint)("buy_box_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.restock2 = (0, pg_core_1.pgTable)("restock_2", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('restock_id_seq', regclass)).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idProductOrder: (0, pg_core_1.bigint)("id_product_order", { mode: "number" }),
    createAt: (0, pg_core_1.timestamp)("create_at", { withTimezone: true, mode: 'string' }),
    updateAt: (0, pg_core_1.timestamp)("update_at", { withTimezone: true, mode: 'string' }),
});
exports.restockFilters = (0, pg_core_1.pgTable)("restock_filters", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCuadro: (0, pg_core_1.bigint)("id_cuadro", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idProduct: (0, pg_core_1.bigint)("id_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    originProduct: (0, pg_core_1.bigint)("origin_product", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
}, function (table) {
    return {
        idxPublicRestockFiltersIdProduct: (0, pg_core_1.index)("idx_public_restock_filters_id_product").on(table.idProduct),
        idxPublicRestockFiltersIdUserr: (0, pg_core_1.index)("idx_public_restock_filters_id_userr").on(table.idUser),
    };
});
exports.rolList = (0, pg_core_1.pgTable)("rol_list", {
    rolId: (0, pg_core_1.integer)("rol_id"),
    description: (0, pg_core_1.varchar)("description", { length: 50 }),
    status: (0, pg_core_1.integer)("status"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { mode: 'string' }),
});
exports.rolPermissions = (0, pg_core_1.pgTable)("rol_permissions", {
    id: (0, pg_core_1.integer)("id").default(nextval('rol_permissions_id_seq', regclass)).notNull(),
    state: (0, pg_core_1.boolean)("state").default(true).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { mode: 'string' }),
    deletedAt: (0, pg_core_1.timestamp)("deleted_at", { withTimezone: true, mode: 'string' }),
    moduleId: (0, pg_core_1.integer)("module_id").notNull(),
    sectionId: (0, pg_core_1.integer)("section_id").notNull(),
    rolId: (0, pg_core_1.integer)("rol_id").notNull(),
    permissionId: (0, pg_core_1.integer)("permission_id").notNull(),
    status: (0, pg_core_1.integer)("status").notNull(),
});
exports.rolPermissionsList = (0, pg_core_1.pgTable)("rol_permissions_list", {
    moduleId: (0, pg_core_1.integer)("module_id"),
    sectionId: (0, pg_core_1.integer)("section_id"),
    rolId: (0, pg_core_1.integer)("rol_id"),
    permissionId: (0, pg_core_1.integer)("permission_id"),
});
exports.restockEmission = (0, pg_core_1.pgTable)("restock_emission", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('restock_emission_id_seq', regclass)).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idRestock: (0, pg_core_1.bigint)("id_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numPo: (0, pg_core_1.bigint)("num_po", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    leadTimes: (0, pg_core_1.bigint)("lead_times", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocity: (0, pg_core_1.bigint)("sales_velocity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dosl: (0, pg_core_1.bigint)("dosl", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToRestock: (0, pg_core_1.bigint)("sales_to_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAmz: (0, pg_core_1.bigint)("sales_amz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsWh: (0, pg_core_1.bigint)("units_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUsersR1: (0, pg_core_1.bigint)("id_users_r1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUsersR2: (0, pg_core_1.bigint)("id_users_r2", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proAsin: (0, pg_core_1.bigint)("pro_asin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proUpc: (0, pg_core_1.bigint)("pro_upc", { mode: "number" }),
    notaF1: (0, pg_core_1.varchar)("nota_f1", { length: 300 }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 300 }),
});
exports.salesOld = (0, pg_core_1.pgTable)("sales_old", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('sales_id_seq', regclass)).notNull(),
    amazonorderid: (0, pg_core_1.text)("amazonorderid"),
    lastupdatedate: (0, pg_core_1.timestamp)("lastupdatedate", { precision: 2, mode: 'string' }),
    latestshipdate: (0, pg_core_1.timestamp)("latestshipdate", { precision: 2, mode: 'string' }),
    purchasedate: (0, pg_core_1.timestamp)("purchasedate", { precision: 2, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ordertotalAmount: (0, pg_core_1.bigint)("ordertotal_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itemtaxAmount: (0, pg_core_1.bigint)("itemtax_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itempriceAmount: (0, pg_core_1.bigint)("itemprice_amount", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    sellersku: (0, pg_core_1.text)("sellersku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    quantityordered: (0, pg_core_1.bigint)("quantityordered", { mode: "number" }),
    orderitemid: (0, pg_core_1.text)("orderitemid"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    priceBuyItem: (0, pg_core_1.bigint)("price_buy_item", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    feesItemProduct: (0, pg_core_1.bigint)("fees_item_product", { mode: "number" }),
});
exports.searchProduc = (0, pg_core_1.pgTable)("search_produc", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    status: (0, pg_core_1.integer)("status"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
});
exports.sections = (0, pg_core_1.pgTable)("sections", {
    id: (0, pg_core_1.integer)("id").default(nextval('user_administration_section_id_seq', regclass)).notNull(),
    state: (0, pg_core_1.boolean)("state").default(true).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    deletedAt: (0, pg_core_1.timestamp)("deleted_at", { withTimezone: true, mode: 'string' }),
    description: (0, pg_core_1.varchar)("description", { length: 50 }),
    status: (0, pg_core_1.integer)("status"),
    moduleId: (0, pg_core_1.integer)("module_id"),
    seUrl: (0, pg_core_1.varchar)("se_url", { length: 100 }),
});
exports.sectionList = (0, pg_core_1.pgTable)("section_list", {
    seId: (0, pg_core_1.integer)("se_id"),
    description: (0, pg_core_1.varchar)("description", { length: 50 }),
    status: (0, pg_core_1.integer)("status"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    moduleId: (0, pg_core_1.integer)("module_id"),
    seUrl: (0, pg_core_1.varchar)("se_url", { length: 100 }),
});
exports.selfTo = (0, pg_core_1.pgTable)("self_to", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    addres: (0, pg_core_1.text)("addres"),
    city: (0, pg_core_1.text)("city"),
    number: (0, pg_core_1.text)("number"),
    email: (0, pg_core_1.text)("email"),
});
exports.starProduct = (0, pg_core_1.pgTable)("star_product", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagActive: (0, pg_core_1.bigint)("flag_active", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    companyId: (0, pg_core_1.bigint)("company_id", { mode: "number" }),
});
exports.statusRestock = (0, pg_core_1.pgTable)("status_restock", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('status_restock_id_seq', regclass)).primaryKey().notNull(),
    description: (0, pg_core_1.varchar)("description", { length: 30 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.tableConfirmedInvoices = (0, pg_core_1.pgTable)("table_confirmed_invoices", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    itemNumber: (0, pg_core_1.text)("Item number"),
    productName: (0, pg_core_1.text)("Product name"),
    upc: (0, pg_core_1.text)("UPC"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("Units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("Cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("Unit cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("Total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    asiNsCount: (0, pg_core_1.bigint)("ASINs count", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("Discount", { mode: "number" }),
    productNotes: (0, pg_core_1.text)("Product notes"),
    clickToCheckProduct: (0, pg_core_1.text)("Click to check product"),
    supplier: (0, pg_core_1.text)("Supplier"),
    idItemNumber: (0, pg_core_1.text)("Id item number"),
    orderType: (0, pg_core_1.text)("ORDER TYPE"),
    orderId: (0, pg_core_1.text)("ORDER ID"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsPerCase: (0, pg_core_1.bigint)("Units per case", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCostConfirmed: (0, pg_core_1.bigint)("Total Cost Confirmed", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsConfirmadas: (0, pg_core_1.bigint)("Units confirmadas", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cambiosDePrecio: (0, pg_core_1.bigint)("Cambios de precio", { mode: "number" }),
    otraInfoRelevanteQuePuedaPonerEstef: (0, pg_core_1.text)("Otra info relevante que pueda poner estef")
}("timestamp (Order enviada)"), (0, pg_core_1.timestamp)(confirmacionDeOrder), (0, pg_core_1.text)("timestamp (confirmacion de order)"));
;
exports.tableStatusWaiting = (0, pg_core_1.pgTable)("table_status_waiting", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    itemNumber: (0, pg_core_1.text)("Item number"),
    productName: (0, pg_core_1.text)("Product name"),
    upc: (0, pg_core_1.text)("UPC"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("Units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cases: (0, pg_core_1.bigint)("Cases", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("Unit cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("Total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    asiNsCount: (0, pg_core_1.bigint)("ASINs count", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discount: (0, pg_core_1.bigint)("Discount", { mode: "number" }),
    productNotes: (0, pg_core_1.text)("Product notes"),
    clickToCheckProduct: (0, pg_core_1.text)("Click to check product"),
    supplier: (0, pg_core_1.text)("Supplier"),
    idItemNumber: (0, pg_core_1.text)("Id item number"),
    orderType: (0, pg_core_1.text)("ORDER TYPE"),
    orderId: (0, pg_core_1.text)("ORDER ID"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsPerCase: (0, pg_core_1.bigint)("Units per case", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCostConfirmed: (0, pg_core_1.bigint)("Total cost Confirmed", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsConfirmadas: (0, pg_core_1.bigint)("Units confirmadas", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCostConfirmed: (0, pg_core_1.bigint)("Unit cost confirmed", { mode: "number" }),
});
exports.tokenBlacklistBlacklistedtoken = (0, pg_core_1.pgTable)("token_blacklist_blacklistedtoken", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    blacklistedAt: (0, pg_core_1.timestamp)("blacklisted_at", { withTimezone: true, mode: 'string' }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    tokenId: (0, pg_core_1.bigint)("token_id", { mode: "number" }).notNull(),
});
exports.tokenBlacklistOutstandingtoken = (0, pg_core_1.pgTable)("token_blacklist_outstandingtoken", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    token: (0, pg_core_1.text)("token").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    expiresAt: (0, pg_core_1.timestamp)("expires_at", { withTimezone: true, mode: 'string' }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    userId: (0, pg_core_1.bigint)("user_id", { mode: "number" }),
    jti: (0, pg_core_1.varchar)("jti", { length: 255 }).notNull(),
});
exports.topBestPrices = (0, pg_core_1.pgTable)("top_best_prices", {
    upc: (0, pg_core_1.text)("upc"),
    price: (0, pg_core_1.numeric)("price"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rank: (0, pg_core_1.bigint)("rank", { mode: "number" }),
});
exports.topBestPricesTomanEnCuentaDescuento = (0, pg_core_1.pgTable)("top_best_prices_toman_en_cuenta_descuento", {
    upc: (0, pg_core_1.text)("upc"),
    price: (0, pg_core_1.numeric)("price"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rank: (0, pg_core_1.bigint)("rank", { mode: "number" }),
});
exports.topF1 = (0, pg_core_1.pgTable)("top_f1", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadUpcAsignados: (0, pg_core_1.bigint)("cantidad_upc_asignados", { mode: "number" }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amarillo: (0, pg_core_1.bigint)("amarillo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    azul: (0, pg_core_1.bigint)("azul", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    rojo: (0, pg_core_1.bigint)("rojo", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    verde: (0, pg_core_1.bigint)("verde", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoAprobado: (0, pg_core_1.bigint)("enviado_aprobado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    enviadoRechazado: (0, pg_core_1.bigint)("enviado_rechazado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    distributor: (0, pg_core_1.varchar)("distributor"),
});
exports.truckAssignment = (0, pg_core_1.pgTable)("truck_assignment", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    priorityOrder: (0, pg_core_1.text)("priority_order"),
    title: (0, pg_core_1.text)("title"),
    asin: (0, pg_core_1.text)("asin"),
    packQty: (0, pg_core_1.text)("pack_qty"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packCost: (0, pg_core_1.bigint)("pack_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToSend: (0, pg_core_1.bigint)("sales_to_send", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToSend: (0, pg_core_1.bigint)("units_to_send", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    remainingUnits: (0, pg_core_1.bigint)("remaining_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedUnits: (0, pg_core_1.bigint)("recommended_units", { mode: "number" }),
    restock: (0, pg_core_1.text)("restock"),
    type: (0, pg_core_1.text)("type"),
    coments: (0, pg_core_1.text)("coments"),
    rot: (0, pg_core_1.text)("rot"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.sales = (0, pg_core_1.pgTable)("sales", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('sales_id_seq', regclass)).primaryKey().notNull(),
    amazonorderid: (0, pg_core_1.text)("amazonorderid"),
    lastupdatedate: (0, pg_core_1.timestamp)("lastupdatedate", { precision: 2, withTimezone: true, mode: 'string' }),
    latestshipdate: (0, pg_core_1.timestamp)("latestshipdate", { precision: 2, withTimezone: true, mode: 'string' }),
    purchasedate: (0, pg_core_1.timestamp)("purchasedate", { precision: 2, withTimezone: true, mode: 'string' }),
    orderstatus: (0, pg_core_1.text)("orderstatus"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    ordertotalAmount: (0, pg_core_1.bigint)("ordertotal_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itemtaxAmount: (0, pg_core_1.bigint)("itemtax_amount", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itempriceAmount: (0, pg_core_1.bigint)("itemprice_amount", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    sellersku: (0, pg_core_1.text)("sellersku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    quantityordered: (0, pg_core_1.bigint)("quantityordered", { mode: "number" }),
    orderitemid: (0, pg_core_1.text)("orderitemid"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    priceBuyItem: (0, pg_core_1.bigint)("price_buy_item", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    feesItemProduct: (0, pg_core_1.bigint)("fees_item_product", { mode: "number" }),
    status: (0, pg_core_1.integer)("status").default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referralFee: (0, pg_core_1.bigint)("referral_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variableClosingFee: (0, pg_core_1.bigint)("variable_closing_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    perItemFee: (0, pg_core_1.bigint)("per_item_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaWeightHandling: (0, pg_core_1.bigint)("fba_weight_handling", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickAndPack: (0, pg_core_1.bigint)("fba_pick_and_pack", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaOrderHandling: (0, pg_core_1.bigint)("fba_order_handling", { mode: "number" }),
    img: (0, pg_core_1.text)("img"),
    ftl: (0, pg_core_1.text)("ftl"),
    dateFtl: (0, pg_core_1.text)("date_ftl"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFtl: (0, pg_core_1.bigint)("id_ftl", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
}, function (table) {
    return {
        idxPublicSalesAmazonorderid: (0, pg_core_1.index)("idx_public_sales_amazonorderid").on(table.amazonorderid),
        idxPublicSalesAsin: (0, pg_core_1.index)("idx_public_sales_asin").on(table.asin),
        idxPublicSalesDateFtl: (0, pg_core_1.index)("idx_public_sales_date_ftl").on(table.dateFtl),
        idxPublicSalesFtl: (0, pg_core_1.index)("idx_public_sales_ftl").on(table.ftl),
        idxPublicSalesIdFtl: (0, pg_core_1.index)("idx_public_sales_id_ftl").on(table.idFtl),
        idxPublicSalesItempriceAmount: (0, pg_core_1.index)("idx_public_sales_itemprice_amount").on(table.itempriceAmount),
        idxPublicSalesItemtaxAmount: (0, pg_core_1.index)("idx_public_sales_itemtax_amount").on(table.itemtaxAmount),
        idxPublicSalesOrderstatus: (0, pg_core_1.index)("idx_public_sales_orderstatus").on(table.orderstatus),
        idxPublicSalesOrdertotalAmount: (0, pg_core_1.index)("idx_public_sales_ordertotal_amount").on(table.ordertotalAmount),
        idxPublicSalesPurchasedate: (0, pg_core_1.index)("idx_public_sales_purchasedate").on(table.purchasedate),
        idxPublicSalesQuantityordered: (0, pg_core_1.index)("idx_public_sales_quantityordered").on(table.quantityordered),
        idxPublicSalesSellersku: (0, pg_core_1.index)("idx_public_sales_sellersku").on(table.sellersku),
    };
});
exports.truckAssignmentHistoric = (0, pg_core_1.pgTable)("truck_assignment_historic", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    priorityOrder: (0, pg_core_1.text)("priority_order"),
    title: (0, pg_core_1.text)("title"),
    asin: (0, pg_core_1.text)("asin"),
    packQty: (0, pg_core_1.text)("pack_qty"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitCost: (0, pg_core_1.bigint)("unit_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packCost: (0, pg_core_1.bigint)("pack_cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToSend: (0, pg_core_1.bigint)("sales_to_send", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToSend: (0, pg_core_1.bigint)("units_to_send", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    remainingUnits: (0, pg_core_1.bigint)("remaining_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    recommendedUnits: (0, pg_core_1.bigint)("recommended_units", { mode: "number" }),
    restock: (0, pg_core_1.text)("restock"),
    type: (0, pg_core_1.text)("type"),
    coments: (0, pg_core_1.text)("coments"),
    rot: (0, pg_core_1.text)("rot"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalCost: (0, pg_core_1.bigint)("total_cost", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { mode: 'string' }),
});
exports.unifiedResponseProgramsF2 = (0, pg_core_1.pgTable)("unified_response_programs_f2_", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current"),
    salesRankReference: (0, pg_core_1.text)("sales_rank_reference"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    reviews: (0, pg_core_1.text)("reviews"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesKeeepa: (0, pg_core_1.bigint)("sales_keeepa", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAz: (0, pg_core_1.bigint)("sales_az", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank306090: (0, pg_core_1.bigint)("sales_rank_30_60_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUnifiedResponsePrograms: (0, pg_core_1.bigint)("id_unified_response_programs", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalFeeBasedOnCurrentPrice: (0, pg_core_1.bigint)("referal_fee_based_on_current_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginPercent: (0, pg_core_1.bigint)("margin_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginFromCurrentFbaPrice: (0, pg_core_1.bigint)("margin_from_current_fba_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roiExcludingPrep: (0, pg_core_1.bigint)("roi_excluding_prep", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minMarginMet: (0, pg_core_1.bigint)("min_margin_met", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inStock: (0, pg_core_1.bigint)("in_stock", { mode: "number" }),
    restock: (0, pg_core_1.integer)("restock"),
    new: (0, pg_core_1.integer)("new"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mfnPrice: (0, pg_core_1.bigint)("mfn_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amzOutOfStock90: (0, pg_core_1.bigint)("amz_out_of_stock_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedSellingUnitsOrder: (0, pg_core_1.bigint)("requested_selling_units_order", { mode: "number" }),
    phase2Notes: (0, pg_core_1.varchar)("phase_2_notes", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba3PartPrice: (0, pg_core_1.bigint)("fba_3_part_price", { mode: "number" }),
    referalPercent: (0, pg_core_1.varchar)("referal_percent", { length: 255 }),
    referalFee: (0, pg_core_1.varchar)("referal_fee", { length: 255 }),
    roi: (0, pg_core_1.varchar)("roi", { length: 255 }),
    snl: (0, pg_core_1.varchar)("snl", { length: 255 }),
    minMarginMet: (0, pg_core_1.varchar)("min_margin_met_", { length: 255 }),
    marginPercent: (0, pg_core_1.varchar)("margin_percent_", { length: 255 }),
});
exports.unifiedResponseProgramsF2Repetidos = (0, pg_core_1.pgTable)("unified_response_programs_f2_repetidos", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('unified_response_programs_f2_id_seq', regclass)).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current"),
    salesRankReference: (0, pg_core_1.text)("sales_rank_reference"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    reviews: (0, pg_core_1.text)("reviews"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesKeeepa: (0, pg_core_1.bigint)("sales_keeepa", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAz: (0, pg_core_1.bigint)("sales_az", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank306090: (0, pg_core_1.bigint)("sales_rank_30_60_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUnifiedResponsePrograms: (0, pg_core_1.bigint)("id_unified_response_programs", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalFeeBasedOnCurrentPrice: (0, pg_core_1.bigint)("referal_fee_based_on_current_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginPercent: (0, pg_core_1.bigint)("margin_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginFromCurrentFbaPrice: (0, pg_core_1.bigint)("margin_from_current_fba_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roiExcludingPrep: (0, pg_core_1.bigint)("roi_excluding_prep", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minMarginMet: (0, pg_core_1.bigint)("min_margin_met", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inStock: (0, pg_core_1.bigint)("in_stock", { mode: "number" }),
    restock: (0, pg_core_1.integer)("restock"),
    new: (0, pg_core_1.integer)("new"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mfnPrice: (0, pg_core_1.bigint)("mfn_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amzOutOfStock90: (0, pg_core_1.bigint)("amz_out_of_stock_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedSellingUnitsOrder: (0, pg_core_1.bigint)("requested_selling_units_order", { mode: "number" }),
    phase2Notes: (0, pg_core_1.varchar)("phase_2_notes", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba3PartPrice: (0, pg_core_1.bigint)("fba_3_part_price", { mode: "number" }),
    referalPercent: (0, pg_core_1.varchar)("referal_percent", { length: 255 }),
    referalFee: (0, pg_core_1.varchar)("referal_fee", { length: 255 }),
    roi: (0, pg_core_1.varchar)("roi", { length: 255 }),
    snl: (0, pg_core_1.varchar)("snl", { length: 255 }),
    minMarginMet: (0, pg_core_1.varchar)("min_margin_met_", { length: 255 }),
    marginPercent: (0, pg_core_1.varchar)("margin_percent_", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 255 }),
    meltable: (0, pg_core_1.text)("meltable"),
});
exports.upc = (0, pg_core_1.pgTable)("upc", {
    id: (0, pg_core_1.serial)("id").notNull(),
    upc: (0, pg_core_1.text)("upc"),
});
exports.upcAsin = (0, pg_core_1.pgTable)("upc_asin", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("ID", { mode: "number" }).notNull(),
    upc: (0, pg_core_1.text)("UPC"),
    asin: (0, pg_core_1.text)("ASIN"),
});
exports.upcBase = (0, pg_core_1.pgTable)("upc_base", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upc: (0, pg_core_1.varchar)("upc", { length: 14 }),
});
exports.upcFallidos = (0, pg_core_1.pgTable)("upc_fallidos", {
    id: (0, pg_core_1.integer)("id"),
    upc: (0, pg_core_1.text)("upc"),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPercent: (0, pg_core_1.bigint)("discount_percent", { mode: "number" }),
    dateCreated: (0, pg_core_1.timestamp)("date_created", { mode: 'string' }),
    dateUpdated: (0, pg_core_1.timestamp)("date_updated", { mode: 'string' }),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    moq: (0, pg_core_1.bigint)("moq", { mode: "number" }),
});
exports.vDistributorId = (0, pg_core_1.pgTable)("v_distributor_id", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
});
exports.variationMala = (0, pg_core_1.pgTable)("variation_mala", {
    id: (0, pg_core_1.integer)("id").default(nextval('restock_emission_id_seq', regclass)).notNull(),
    asin: (0, pg_core_1.varchar)("asin", { length: 30 }),
    upc: (0, pg_core_1.varchar)("upc", { length: 30 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.vendor = (0, pg_core_1.pgTable)("vendor", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    distributor: (0, pg_core_1.text)("distributor"),
    streetAddress: (0, pg_core_1.text)("street_address"),
    responsable: (0, pg_core_1.text)("responsable"),
    city: (0, pg_core_1.text)("city"),
    phone: (0, pg_core_1.text)("phone"),
    mail: (0, pg_core_1.text)("mail"),
    distributorId: (0, pg_core_1.integer)("distributor_id"),
});
exports.warehouse = (0, pg_core_1.pgTable)("warehouse", {
    id: (0, pg_core_1.serial)("id").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    invId: (0, pg_core_1.bigint)("inv_id", { mode: "number" }),
    sku: (0, pg_core_1.text)("sku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unity: (0, pg_core_1.bigint)("unity", { mode: "number" }),
    note: (0, pg_core_1.text)("note"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cogs: (0, pg_core_1.bigint)("cogs", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    indications: (0, pg_core_1.bigint)("indications", { mode: "number" }),
    asinVariation: (0, pg_core_1.text)("asin_variation"),
});
exports.unifiedResponseProgramsBundle = (0, pg_core_1.pgTable)("unified_response_programs_bundle", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedSellingUnitsOrder: (0, pg_core_1.bigint)("requested_selling_units_order", { mode: "number" }),
    phase2Notes: (0, pg_core_1.varchar)("phase_2_notes", { length: 255 }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUserDiscard: (0, pg_core_1.bigint)("id_user_discard", { mode: "number" }),
    updatedAtDiscard: (0, pg_core_1.timestamp)("updated_at_discard", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagHistoric: (0, pg_core_1.bigint)("flag_historic", { mode: "number" }).default(0),
});
exports.voc = (0, pg_core_1.pgTable)("voc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    ncxRate: (0, pg_core_1.numeric)("ncx_rate"),
    topNcxReason: (0, pg_core_1.text)("top_ncx_reason"),
    lastUpdated: (0, pg_core_1.timestamp)("last_updated", { withTimezone: true, mode: 'string' }),
    pcxHealth: (0, pg_core_1.text)("pcx_health"),
    company: (0, pg_core_1.text)("company"),
    nellyComment: (0, pg_core_1.text)("nelly_comment"),
    md5: (0, pg_core_1.text)("md5"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    statusRestock: (0, pg_core_1.text)("status_restock"),
    idVoc: (0, pg_core_1.text)("id_voc"),
}, function (table) {
    return {
        idxPublicVocId: (0, pg_core_1.index)("idx_public_voc_id").on(table.id),
        idxPublicVocNcxRate: (0, pg_core_1.index)("idx_public_voc_ncx_rate").on(table.ncxRate),
        idxPublicVocTopNcxReason: (0, pg_core_1.index)("idx_public_voc_top_ncx_reason").on(table.topNcxReason),
        idxPublicVocPcxHealth: (0, pg_core_1.index)("idx_public_voc_pcx_health").on(table.pcxHealth),
        idxPublicVocCompany: (0, pg_core_1.index)("idx_public_voc_company").on(table.company),
        idxPublicVocNellyComment: (0, pg_core_1.index)("idx_public_voc_nelly_comment").on(table.nellyComment),
        idxPublicVocMd5: (0, pg_core_1.index)("idx_public_voc_md5").on(table.md5),
        idxPublicVocAsin: (0, pg_core_1.index)("idx_public_voc_asin").on(table.asin),
    };
});
exports.goUpcGb = (0, pg_core_1.pgTable)("go_upc_gb", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upcInit: (0, pg_core_1.text)("upc_init"),
    upcFinal: (0, pg_core_1.text)("upc_final"),
    description: (0, pg_core_1.text)("description"),
    marca: (0, pg_core_1.text)("marca"),
    urlImg: (0, pg_core_1.text)("url_img"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.variation = (0, pg_core_1.pgTable)("variation", {
    id: (0, pg_core_1.integer)("id").default(nextval('restock_id_seq', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.varchar)("asin", { length: 30 }),
    upc: (0, pg_core_1.varchar)("upc", { length: 30 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusAsinRestock: (0, pg_core_1.bigint)("id_status_asin_restock", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusProduct: (0, pg_core_1.bigint)("id_status_product", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }).default(0),
    fechaEmision: (0, pg_core_1.timestamp)("fecha_emision", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numPo: (0, pg_core_1.bigint)("num_po", { mode: "number" }),
    fechaConfirmado: (0, pg_core_1.timestamp)("fecha_confirmado", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proAsin: (0, pg_core_1.bigint)("pro_asin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proUpc: (0, pg_core_1.bigint)("pro_upc", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUserF2: (0, pg_core_1.bigint)("id_user_f2", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToRestock: (0, pg_core_1.bigint)("sales_to_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dosl: (0, pg_core_1.bigint)("dosl", { mode: "number" }),
    notaF1Restock: (0, pg_core_1.varchar)("nota_f1_restock", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }).default(1),
    notaF2Restock: (0, pg_core_1.varchar)("nota_f2_restock", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lookinFowardDays: (0, pg_core_1.bigint)("lookin_foward_days", { mode: "number" }),
    lookiFowardDate: (0, pg_core_1.time)("looki_foward_date"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocity: (0, pg_core_1.bigint)("sales_velocity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lastUser: (0, pg_core_1.bigint)("last_user", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagHistoric: (0, pg_core_1.bigint)("flag_historic", { mode: "number" }),
}, function (table) {
    return {
        idxPublicVariationAsin: (0, pg_core_1.index)("idx_public_variation_asin").on(table.asin),
        idxPublicVariationId: (0, pg_core_1.index)("idx_public_variation_id").on(table.id),
        idxPublicVariationIdCompany: (0, pg_core_1.index)("idx_public_variation_id_company").on(table.idCompany),
        idxPublicVariationIdDistributor: (0, pg_core_1.index)("idx_public_variation_id_distributor").on(table.idDistributor),
        idxPublicVariationIdStatusAsinRestock: (0, pg_core_1.index)("idx_public_variation_id_status_asin_restock").on(table.idStatusAsinRestock),
        idxPublicVariationIdStatusProduct: (0, pg_core_1.index)("idx_public_variation_id_status_product").on(table.idStatusProduct),
        idxPublicVariationIdUser: (0, pg_core_1.index)("idx_public_variation_id_user").on(table.idUser),
        idxPublicVariationNumPo: (0, pg_core_1.index)("idx_public_variation_num_po").on(table.numPo),
        idxPublicVariationPrice: (0, pg_core_1.index)("idx_public_variation_price").on(table.price),
        idxPublicVariationProAsin: (0, pg_core_1.index)("idx_public_variation_pro_asin").on(table.proAsin),
        idxPublicVariationProUpc: (0, pg_core_1.index)("idx_public_variation_pro_upc").on(table.proUpc),
        idxPublicVariationSales: (0, pg_core_1.index)("idx_public_variation_sales").on(table.sales),
        idxPublicVariationStatus: (0, pg_core_1.index)("idx_public_variation_status").on(table.status),
        idxPublicVariationUpc: (0, pg_core_1.index)("idx_public_variation_upc").on(table.upc),
    };
});
exports.credentialsApi = (0, pg_core_1.pgTable)("credentials_api", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    refreshToken: (0, pg_core_1.text)("refresh_token"),
    lwaAppId: (0, pg_core_1.text)("lwa_app_id"),
    lwaClientSecret: (0, pg_core_1.text)("lwa_client_secret"),
    company: (0, pg_core_1.integer)("company"),
    status: (0, pg_core_1.integer)("status"),
    createdAt: (0, pg_core_1.timestamp)("created_at_", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.listAsinRestockImportant = (0, pg_core_1.pgTable)("list_asin_restock_important", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
});
exports.reportePo2Nuevo = (0, pg_core_1.pgTable)("reporte_po_2_nuevo", {
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    price: (0, pg_core_1.numeric)("price"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedBuyingUnits: (0, pg_core_1.bigint)("requested_buying_units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    upc: (0, pg_core_1.text)("upc"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    fecha: (0, pg_core_1.timestamp)("fecha", { mode: 'string' }),
    notaF2: (0, pg_core_1.text)("nota_f2"),
    compradorResponsable: (0, pg_core_1.text)("comprador_responsable"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idF3: (0, pg_core_1.bigint)("id_f3", { mode: "number" }),
    idDistributor: (0, pg_core_1.integer)("id_distributor"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    issuedBoxs: (0, pg_core_1.bigint)("issued_boxs", { mode: "number" }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    phase2Notes: (0, pg_core_1.text)("phase_2_notes"),
    typeProduct: (0, pg_core_1.text)("type_product"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    pgf2: (0, pg_core_1.varchar)("pgf2", { length: 255 }),
});
exports.deshabilitadaRestockStatusNotasNotConfirmed = (0, pg_core_1.pgTable)("Deshabilitada_Restock_Status_Notas_notConfirmed", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotas: (0, pg_core_1.bigint)("cantidad_notas", { mode: "number" }),
    notas: (0, pg_core_1.varchar)("notas"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadStatus: (0, pg_core_1.bigint)("cantidad_status", { mode: "number" }),
    status: (0, pg_core_1.varchar)("status"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotConfirmed: (0, pg_core_1.bigint)("cantidad_not_confirmed", { mode: "number" }),
});
exports.poOld = (0, pg_core_1.pgTable)("po_old_", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idEmission: (0, pg_core_1.bigint)("id_emission", { mode: "number" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    totalBox: (0, pg_core_1.numeric)("total_box"),
    price: (0, pg_core_1.numeric)("price"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    name: (0, pg_core_1.text)("name"),
    fecha: (0, pg_core_1.timestamp)("fecha", { withTimezone: true, mode: 'string' }),
    responsableF1: (0, pg_core_1.text)("responsable_f1"),
    notaF1: (0, pg_core_1.text)("nota_f1"),
    responsableF2: (0, pg_core_1.text)("responsable_f2"),
    notaF2: (0, pg_core_1.text)("nota_f2"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorId: (0, pg_core_1.bigint)("distributor_id", { mode: "number" }),
    available: (0, pg_core_1.text)("available"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }),
    distDisponibles: (0, pg_core_1.json)("dist_disponibles"),
});
exports.salesVelocitySummaryBorrar = (0, pg_core_1.pgTable)("sales_velocity_summary_borrar", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    sku: (0, pg_core_1.text)("sku"),
    salesVelocity: (0, pg_core_1.numeric)("sales_velocity"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    company: (0, pg_core_1.bigint)("company", { mode: "number" }),
    md5: (0, pg_core_1.text)("md5"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.marginNetoBorrar = (0, pg_core_1.pgTable)("margin_neto_borrar", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    date: (0, pg_core_1.timestamp)("date_", { withTimezone: true, mode: 'string' }),
    asin: (0, pg_core_1.text)("asin"),
    sku: (0, pg_core_1.text)("sku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsOrganic: (0, pg_core_1.bigint)("units_organic", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsPpc: (0, pg_core_1.bigint)("units_ppc", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    neto: (0, pg_core_1.bigint)("neto", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    company: (0, pg_core_1.bigint)("company", { mode: "number" }),
    md5: (0, pg_core_1.text)("md5"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.upcOfFiles = (0, pg_core_1.pgTable)("upc_of_files", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upcInitial: (0, pg_core_1.text)("upc_initial"),
    upcCompleted: (0, pg_core_1.text)("upc_completed"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUpcFiles: (0, pg_core_1.bigint)("id_upc_files", { mode: "number" }),
});
exports.listAsinRestockLowMarginAndHighMovement = (0, pg_core_1.pgTable)("list_asin_restock_low_margin_and_high_movement", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
});
exports.restockPackQuantity = (0, pg_core_1.pgTable)("restock_pack_quantity", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idAsin: (0, pg_core_1.bigint)("id_asin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    origin: (0, pg_core_1.bigint)("origin", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.noEmitirWalde = (0, pg_core_1.pgTable)("no_emitir_walde", {
    asin: (0, pg_core_1.text)("asin"),
});
exports.reporteMamalonF2UsersJuan = (0, pg_core_1.pgTable)("reporte_mamalon_f2_users_juan", {
    distributor: (0, pg_core_1.varchar)("distributor", { length: 256 }),
    nombre: (0, pg_core_1.text)("nombre"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinRevisar: (0, pg_core_1.bigint)("total_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8SinRevisar: (0, pg_core_1.bigint)("total_140_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8SinRevisar: (0, pg_core_1.bigint)("total_4070_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8SinRevisar: (0, pg_core_1.bigint)("total_70100_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_100250_mayor_8_sin_revisar", { mode: "number" }),
});
exports.asinBase = (0, pg_core_1.pgTable)("asin_base", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.varchar)("asin", { length: 10 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxPrice: (0, pg_core_1.bigint)("buybox_price", { mode: "number" }),
    category: (0, pg_core_1.varchar)("category", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    productSize: (0, pg_core_1.varchar)("product_size", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank: (0, pg_core_1.bigint)("sales_rank", { mode: "number" }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
}, function (table) {
    return {
        idxPublicAsinBaseAsin: (0, pg_core_1.index)("idx_public_asin_base_asin").on(table.asin),
        idxPublicAsinBaseBuyboxPrice: (0, pg_core_1.index)("idx_public_asin_base_buybox_price").on(table.buyboxPrice),
        idxPublicAsinBaseCategory: (0, pg_core_1.index)("idx_public_asin_base_category").on(table.category),
        idxPublicAsinBaseFbaFees: (0, pg_core_1.index)("idx_public_asin_base_fba_fees").on(table.fbaFees),
        idxPublicAsinBaseHeight: (0, pg_core_1.index)("idx_public_asin_base_height").on(table.height),
        idxPublicAsinBaseId: (0, pg_core_1.index)("idx_public_asin_base_id").on(table.id),
        idxPublicAsinBaseLength: (0, pg_core_1.index)("idx_public_asin_base_length").on(table.length),
        idxPublicAsinBasePackQty: (0, pg_core_1.index)("idx_public_asin_base_pack_qty").on(table.packQty),
        idxPublicAsinBaseProductSize: (0, pg_core_1.index)("idx_public_asin_base_product_size").on(table.productSize),
        idxPublicAsinBaseWeight: (0, pg_core_1.index)("idx_public_asin_base_weight").on(table.weight),
        idxPublicAsinBaseWidth: (0, pg_core_1.index)("idx_public_asin_base_width").on(table.width),
    };
});
exports.asinBaseCompraBundle = (0, pg_core_1.pgTable)("asin_base_compra_bundle", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalFeeBasedOnCurrentPrice: (0, pg_core_1.bigint)("referal_fee_based_on_current_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginPercent: (0, pg_core_1.bigint)("margin_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginFromCurrentFbaPrice: (0, pg_core_1.bigint)("margin_from_current_fba_price", { mode: "number" }),
    new: (0, pg_core_1.integer)("new"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    referalPercent: (0, pg_core_1.varchar)("referal_percent", { length: 255 }),
    referalFee: (0, pg_core_1.varchar)("referal_fee", { length: 255 }),
    roi: (0, pg_core_1.varchar)("roi", { length: 255 }),
    snl: (0, pg_core_1.varchar)("snl", { length: 255 }),
    marginPercent: (0, pg_core_1.varchar)("margin_percent_", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    meltable: (0, pg_core_1.text)("meltable"),
});
exports.reporteRankF2 = (0, pg_core_1.pgTable)("reporte_rank_f2", {
    rank140: (0, pg_core_1.numeric)("rank_140"),
    rank4070: (0, pg_core_1.numeric)("rank_4070"),
    rank70100: (0, pg_core_1.numeric)("rank_70100"),
    rank100250: (0, pg_core_1.numeric)("rank_100250"),
    total1A250: (0, pg_core_1.numeric)("total_1_a_250"),
    updatedAt: (0, pg_core_1.date)("updated_at"),
    nombreF2: (0, pg_core_1.text)("nombre_f2"),
});
exports.upcFiles = (0, pg_core_1.pgTable)("upc_files", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    nameFile: (0, pg_core_1.text)("name_file"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    padlock: (0, pg_core_1.bigint)("padlock", { mode: "number" }),
    dateUpdate: (0, pg_core_1.timestamp)("date_update", { withTimezone: true, mode: 'string' }),
});
exports.tablaTemporalMedidasRestock = (0, pg_core_1.pgTable)("tabla_temporal_medidas_restock", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
});
exports.pedroFixUpc = (0, pg_core_1.pgTable)("pedro_fix_upc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upcInicial: (0, pg_core_1.text)("upc_inicial"),
    upcProcesado: (0, pg_core_1.text)("upc_procesado"),
    ean: (0, pg_core_1.text)("ean"),
    status: (0, pg_core_1.text)("status"),
});
exports.upcCompleted = (0, pg_core_1.pgTable)("upc_completed", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upcInitial: (0, pg_core_1.text)("upc_initial"),
    upcCompleted: (0, pg_core_1.text)("upc_completed"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.listAsinRestockAlert = (0, pg_core_1.pgTable)("list_asin_restock_alert", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
});
exports.reportManuelUpdates = (0, pg_core_1.pgTable)("report_manuel_updates", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    lastUpdate: (0, pg_core_1.date)("last_update"),
});
exports.netoTotalSb = (0, pg_core_1.pgTable)("neto_total_sb", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    sku: (0, pg_core_1.text)("sku"),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    md5: (0, pg_core_1.text)("md5"),
});
exports.productSize = (0, pg_core_1.pgTable)("product_size", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.statusTypeF2 = (0, pg_core_1.pgTable)("status_type_f2", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.sellerSnapApi = (0, pg_core_1.pgTable)("seller_snap_api", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    sku: (0, pg_core_1.text)("sku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    curBuyboxPrice: (0, pg_core_1.bigint)("cur_buybox_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    suppressedBuybox: (0, pg_core_1.bigint)("suppressed_buybox", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    listedPrice: (0, pg_core_1.bigint)("listed_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minPrice: (0, pg_core_1.bigint)("min_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    maxPrice: (0, pg_core_1.bigint)("max_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    avgSellingPrice: (0, pg_core_1.bigint)("avg_selling_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxShare: (0, pg_core_1.bigint)("buybox_share", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    avgBuyboxShare: (0, pg_core_1.bigint)("avg_buybox_share", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalOrderItems: (0, pg_core_1.bigint)("total_order_items", { mode: "number" }),
    note: (0, pg_core_1.text)("note"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cost: (0, pg_core_1.bigint)("cost", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    velocity7: (0, pg_core_1.bigint)("velocity_7", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    velocity30: (0, pg_core_1.bigint)("velocity_30", { mode: "number" }),
    repriceConfigPreset: (0, pg_core_1.text)("reprice_config_preset"),
    tags: (0, pg_core_1.text)("tags"),
    md5: (0, pg_core_1.text)("md5"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    company: (0, pg_core_1.bigint)("company", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.reporteMamalon2JuanTeam3 = (0, pg_core_1.pgTable)("reporte_mamalon_2_juan_team_3", {
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total: (0, pg_core_1.bigint)("total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalRevisado: (0, pg_core_1.bigint)("total_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    totalSinRevisar: (0, pg_core_1.bigint)("total_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8: (0, pg_core_1.bigint)("total_140_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8Revisado: (0, pg_core_1.bigint)("total_140_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total140Mayor8SinRevisar: (0, pg_core_1.bigint)("total_140_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8: (0, pg_core_1.bigint)("total_4070_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8Revisado: (0, pg_core_1.bigint)("total_4070_mayor_8_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total4070Mayor8SinRevisar: (0, pg_core_1.bigint)("total_4070_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8: (0, pg_core_1.bigint)("total_70100_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8Reviado: (0, pg_core_1.bigint)("total_70100_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total70100Mayor8SinRevisar: (0, pg_core_1.bigint)("total_70100_mayor_8_sin_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8: (0, pg_core_1.bigint)("total_100250_mayor_8", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8Reviado: (0, pg_core_1.bigint)("total_100250_mayor_8_reviado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250Mayor8SinRevisar: (0, pg_core_1.bigint)("total_100250_mayor_8_sin_revisar", { mode: "number" }),
});
exports.productCategory = (0, pg_core_1.pgTable)("product_category", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('product_category_id_seq', regclass)).primaryKey().notNull(),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.reasonDiscardF2 = (0, pg_core_1.pgTable)("reason_discard_f2", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    description: (0, pg_core_1.text)("description"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.discardHistoricF2 = (0, pg_core_1.pgTable)("discard_historic_f2", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank: (0, pg_core_1.bigint)("sales_rank", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxPrice: (0, pg_core_1.bigint)("buybox_price", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roi: (0, pg_core_1.bigint)("roi", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margint: (0, pg_core_1.bigint)("margint", { mode: "number" }),
    notaF2: (0, pg_core_1.text)("nota_f2"),
    meltable: (0, pg_core_1.text)("meltable"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }),
    idCategoryProduct: (0, pg_core_1.text)("id_category_product"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idReazonDiscard: (0, pg_core_1.bigint)("id_reazon_discard", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusTypeF2: (0, pg_core_1.bigint)("id_status_type_f2", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idSizePriduct: (0, pg_core_1.bigint)("id_size_priduct", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    upc: (0, pg_core_1.text)("upc"),
});
exports.upcCompletosNoviembre = (0, pg_core_1.pgTable)("upc_completos_noviembre", {
    upcCorto: (0, pg_core_1.text)("upc_corto").primaryKey().notNull(),
    upcCompleto: (0, pg_core_1.text)("upc_completo"),
});
exports.statusPurchaseOrder = (0, pg_core_1.pgTable)("status_purchase_order", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    item: (0, pg_core_1.text)("item"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    supplier: (0, pg_core_1.text)("supplier"),
    asin: (0, pg_core_1.text)("asin"),
    fechaEmision: (0, pg_core_1.timestamp)("fecha_emision", { withTimezone: true, mode: 'string' }),
    fechaConfirmacion: (0, pg_core_1.timestamp)("fecha_confirmacion", { withTimezone: true, mode: 'string' }),
    po: (0, pg_core_1.text)("po"),
    md5: (0, pg_core_1.text)("md5"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadConfirmada: (0, pg_core_1.bigint)("cantidad_confirmada", { mode: "number" }).default(0),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    note: (0, pg_core_1.text)("note").default(''),
}, function (table) {
    return {
        idxPublicStatusPurchaseOrderItem: (0, pg_core_1.index)("idx_public_status_purchase_order_item").on(table.item),
        idxPublicStatusPurchaseOrderUnits: (0, pg_core_1.index)("idx_public_status_purchase_order_units").on(table.units),
        idxPublicStatusPurchaseOrderId: (0, pg_core_1.index)("idx_public_status_purchase_order_id").on(table.id),
        idxPublicStatusPurchaseOrderSupplier: (0, pg_core_1.index)("idx_public_status_purchase_order_supplier").on(table.supplier),
        idxPublicStatusPurchaseOrderAsin: (0, pg_core_1.index)("idx_public_status_purchase_order_asin").on(table.asin),
        idxPublicStatusPurchaseOrderFechaEmision: (0, pg_core_1.index)("idx_public_status_purchase_order_fecha_emision").on(table.fechaEmision),
        idxPublicStatusPurchaseOrderFechaConfirmacion: (0, pg_core_1.index)("idx_public_status_purchase_order_fecha_confirmacion").on(table.fechaConfirmacion),
        idxPublicStatusPurchaseOrderPo: (0, pg_core_1.index)("idx_public_status_purchase_order_po").on(table.po),
        idxPublicStatusPurchaseOrderCantidadConfirmada: (0, pg_core_1.index)("idx_public_status_purchase_order_cantidad_confirmada").on(table.cantidadConfirmada),
        idxPublicStatusPurchaseOrderCreatedAt: (0, pg_core_1.index)("idx_public_status_purchase_order_created_at").on(table.createdAt),
        idxPublicStatusPurchaseOrderUpdatedAt: (0, pg_core_1.index)("idx_public_status_purchase_order_updated_at").on(table.updatedAt),
        idxPublicStatusPurchaseOrderIdDistributor: (0, pg_core_1.index)("idx_public_status_purchase_order_id_distributor").on(table.idDistributor),
        idxPublicInTransitAndArrivedId: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_id").on(table.id),
        idxPublicInTransitAndArrivedSupplier: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_supplier").on(table.supplier),
        idxPublicInTransitAndArrivedSupplierPo: (0, pg_core_1.index)("idx_public_in_transit_and_arrived_supplier_po").on(table.po),
        idxPublicStatusPurchaseOrderNote: (0, pg_core_1.index)("idx_public_status_purchase_order_note").on(table.note),
    };
});
exports.restockBundleUpc = (0, pg_core_1.pgTable)("restock_bundle_upc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idRb: (0, pg_core_1.bigint)("id_rb", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    leadTime: (0, pg_core_1.bigint)("lead_time", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsWarehouse: (0, pg_core_1.bigint)("units_warehouse", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proUpc: (0, pg_core_1.bigint)("pro_upc", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToBuy: (0, pg_core_1.bigint)("units_to_buy", { mode: "number" }).default(0),
});
exports.variacionesPedro = (0, pg_core_1.pgTable)("variaciones_pedro", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).notNull(),
    asin: (0, pg_core_1.text)("asin"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
});
exports.totalF2Rafa = (0, pg_core_1.pgTable)("total_f2_rafa", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total1100: (0, pg_core_1.bigint)("total_1_100", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    total100250: (0, pg_core_1.bigint)("total_100_250", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
});
exports.asinBundleBase = (0, pg_core_1.pgTable)("asin_bundle_base", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.varchar)("asin", { length: 10 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxPrice: (0, pg_core_1.bigint)("buybox_price", { mode: "number" }),
    category: (0, pg_core_1.varchar)("category", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    productSize: (0, pg_core_1.varchar)("product_size", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank: (0, pg_core_1.bigint)("sales_rank", { mode: "number" }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.restockBundle = (0, pg_core_1.pgTable)("restock_bundle", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    fechaEmision: (0, pg_core_1.timestamp)("fecha_emision", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numPo: (0, pg_core_1.bigint)("num_po", { mode: "number" }),
    fechaConfirmado: (0, pg_core_1.timestamp)("fecha_confirmado", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusAsinRestock: (0, pg_core_1.bigint)("id_status_asin_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusProduct: (0, pg_core_1.bigint)("id_status_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocity7Days: (0, pg_core_1.bigint)("sales_velocity_7days", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocityPossibly: (0, pg_core_1.bigint)("sales_velocity_possibly", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesMonths: (0, pg_core_1.bigint)("sales_months", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dosl: (0, pg_core_1.bigint)("dosl", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToRestock: (0, pg_core_1.bigint)("sales_to_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAmz: (0, pg_core_1.bigint)("sales_amz", { mode: "number" }),
    lastestFtl: (0, pg_core_1.text)("lastest_ftl"),
    availability: (0, pg_core_1.text)("availability"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }),
    brands: (0, pg_core_1.text)("brands"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proAsin: (0, pg_core_1.bigint)("pro_asin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proUpc: (0, pg_core_1.bigint)("pro_upc", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUserF2: (0, pg_core_1.bigint)("id_user_f2", { mode: "number" }),
    notaF1Restock: (0, pg_core_1.varchar)("nota_f1_restock", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idRbu: (0, pg_core_1.bigint)("id_rbu", { mode: "number" }),
});
exports.capturePriceOrder = (0, pg_core_1.pgTable)("capture_price_order", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    itemPrice: (0, pg_core_1.bigint)("item_price", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    sku: (0, pg_core_1.text)("sku"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    typeOrigin: (0, pg_core_1.bigint)("type_origin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
});
exports.lifeTimeUpc = (0, pg_core_1.pgTable)("life_time_upc", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    upc: (0, pg_core_1.text)("upc"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    discountPrice: (0, pg_core_1.bigint)("discount_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    quantityAvailable: (0, pg_core_1.bigint)("quantity_available", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    dateFile: (0, pg_core_1.timestamp)("date_file", { withTimezone: true, mode: 'string' }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorId: (0, pg_core_1.bigint)("distributor_id", { mode: "number" }),
});
exports.pendingProcessStatusLifeTime = (0, pg_core_1.pgTable)("pending_process_status_life_time", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    nameFile: (0, pg_core_1.text)("name_file"),
    dateUpdate: (0, pg_core_1.timestamp)("date_update", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    origin: (0, pg_core_1.bigint)("origin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    statusAsig: (0, pg_core_1.bigint)("status_asig", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    padlock: (0, pg_core_1.bigint)("padlock", { mode: "number" }),
});
exports.importantMovementRestockEmpresasDiario = (0, pg_core_1.pgTable)("Important_Movement_Restock_Empresas_Diario", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbTotal: (0, pg_core_1.bigint)("gb_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbPorRevisar: (0, pg_core_1.bigint)("gb_por_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierTotal: (0, pg_core_1.bigint)("shipplier_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierPorRevisar: (0, pg_core_1.bigint)("shipplier_por_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpTotal: (0, pg_core_1.bigint)("jmp_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpPorRevisar: (0, pg_core_1.bigint)("jmp_por_revisar", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanTotal: (0, pg_core_1.bigint)("nitan_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanPorRevisar: (0, pg_core_1.bigint)("nitan_por_revisar", { mode: "number" }),
    now: (0, pg_core_1.timestamp)("now", { withTimezone: true, mode: 'string' }),
});
exports.asinFaltantes = (0, pg_core_1.pgTable)("asin_faltantes", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba: (0, pg_core_1.bigint)("fba", { mode: "number" }),
    size: (0, pg_core_1.text)("size"),
    rank: (0, pg_core_1.text)("rank"),
});
exports.listVariation = (0, pg_core_1.pgTable)("list_variation", {
    id: (0, pg_core_1.integer)("id"),
});
exports.marginDist = (0, pg_core_1.pgTable)("margin_dist", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.countPendientesVariation = (0, pg_core_1.pgTable)("count_pendientes_variation", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    count: (0, pg_core_1.bigint)("count", { mode: "number" }),
});
exports.countPendientesRestock = (0, pg_core_1.pgTable)("count_pendientes_restock", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    pendienes: (0, pg_core_1.bigint)("pendienes", { mode: "number" }),
});
exports.lastPoStatus = (0, pg_core_1.pgTable)("last_po_status", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    status: (0, pg_core_1.text)("status"),
    status2: (0, pg_core_1.text)("status_2"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
}, function (table) {
    return {
        idxPublicLastPoStatusAsin: (0, pg_core_1.index)("idx_public_last_po_status_asin").on(table.asin),
        idxPublicLastPoStatusStatus: (0, pg_core_1.index)("idx_public_last_po_status_status").on(table.status),
    };
});
exports.restockNotification = (0, pg_core_1.pgTable)("restock_notification", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idRestock: (0, pg_core_1.bigint)("id_restock", { mode: "number" }),
    status: (0, pg_core_1.integer)("status").default(1),
    type: (0, pg_core_1.integer)("type").default(1),
});
exports.restockEmission2 = (0, pg_core_1.pgTable)("restock_emission_2", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('restock_emission_id_2_seq', regclass)).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idRestock: (0, pg_core_1.bigint)("id_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    numPo: (0, pg_core_1.bigint)("num_po", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sales: (0, pg_core_1.bigint)("sales", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    leadTimes: (0, pg_core_1.bigint)("lead_times", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesVelocity: (0, pg_core_1.bigint)("sales_velocity", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    dosl: (0, pg_core_1.bigint)("dosl", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesToRestock: (0, pg_core_1.bigint)("sales_to_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAmz: (0, pg_core_1.bigint)("sales_amz", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsWh: (0, pg_core_1.bigint)("units_wh", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUsersR1: (0, pg_core_1.bigint)("id_users_r1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUsersR2: (0, pg_core_1.bigint)("id_users_r2", { mode: "number" }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proAsin: (0, pg_core_1.bigint)("pro_asin", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    proUpc: (0, pg_core_1.bigint)("pro_upc", { mode: "number" }),
    notaF1: (0, pg_core_1.varchar)("nota_f1", { length: 300 }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 300 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    unitsToBuy: (0, pg_core_1.bigint)("units_to_buy", { mode: "number" }),
});
exports.listAsinRestockSobrante = (0, pg_core_1.pgTable)("list_asin_restock_sobrante", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
});
exports.totalesEmpresasRestock = (0, pg_core_1.pgTable)("totales_empresas_restock", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    hold: (0, pg_core_1.bigint)("hold_", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    sent: (0, pg_core_1.bigint)("sent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    disponible: (0, pg_core_1.bigint)("disponible", { mode: "number" }),
    companyName: (0, pg_core_1.varchar)("company_name", { length: 200 }),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
});
exports.unifiedResponseProgramsF2Historic = (0, pg_core_1.pgTable)("unified_response_programs_f2_historic", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).default(nextval('unified_response_programs_f2_historic_id_seq', regclass)).primaryKey().notNull(),
    asin: (0, pg_core_1.text)("asin"),
    salesRankCurrent: (0, pg_core_1.text)("sales_rank_current"),
    salesRankReference: (0, pg_core_1.text)("sales_rank_reference"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    buyboxCurrent: (0, pg_core_1.bigint)("buybox_current", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaPickPackFee: (0, pg_core_1.bigint)("fba_pick_pack_fee", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    supplierSku: (0, pg_core_1.text)("supplier_sku"),
    category: (0, pg_core_1.text)("category"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    height: (0, pg_core_1.bigint)("height", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    length: (0, pg_core_1.bigint)("length", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    width: (0, pg_core_1.bigint)("width", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQuantity: (0, pg_core_1.bigint)("pack_quantity", { mode: "number" }),
    productSize: (0, pg_core_1.text)("product_size"),
    reviews: (0, pg_core_1.text)("reviews"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesKeeepa: (0, pg_core_1.bigint)("sales_keeepa", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAz: (0, pg_core_1.bigint)("sales_az", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesRank306090: (0, pg_core_1.bigint)("sales_rank_30_60_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUnifiedResponsePrograms: (0, pg_core_1.bigint)("id_unified_response_programs", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idFilter: (0, pg_core_1.bigint)("id_filter", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fullFillmentFee: (0, pg_core_1.bigint)("full_fillment_fee", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalFeeBasedOnCurrentPrice: (0, pg_core_1.bigint)("referal_fee_based_on_current_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    netProfit: (0, pg_core_1.bigint)("net_profit", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginPercent: (0, pg_core_1.bigint)("margin_percent", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    marginFromCurrentFbaPrice: (0, pg_core_1.bigint)("margin_from_current_fba_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    roiExcludingPrep: (0, pg_core_1.bigint)("roi_excluding_prep", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    minMarginMet: (0, pg_core_1.bigint)("min_margin_met", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    inStock: (0, pg_core_1.bigint)("in_stock", { mode: "number" }),
    restock: (0, pg_core_1.integer)("restock"),
    new: (0, pg_core_1.integer)("new"),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    mfnPrice: (0, pg_core_1.bigint)("mfn_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    amzOutOfStock90: (0, pg_core_1.bigint)("amz_out_of_stock_90", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    variation: (0, pg_core_1.bigint)("variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    requestedSellingUnitsOrder: (0, pg_core_1.bigint)("requested_selling_units_order", { mode: "number" }),
    phase2Notes: (0, pg_core_1.varchar)("phase_2_notes", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fba3PartPrice: (0, pg_core_1.bigint)("fba_3_part_price", { mode: "number" }),
    referalPercent: (0, pg_core_1.varchar)("referal_percent", { length: 255 }),
    referalFee: (0, pg_core_1.varchar)("referal_fee", { length: 255 }),
    roi: (0, pg_core_1.varchar)("roi", { length: 255 }),
    snl: (0, pg_core_1.varchar)("snl", { length: 255 }),
    minMarginMet: (0, pg_core_1.varchar)("min_margin_met_", { length: 255 }),
    marginPercent: (0, pg_core_1.varchar)("margin_percent_", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    margin: (0, pg_core_1.bigint)("margin", { mode: "number" }),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 255 }),
    meltable: (0, pg_core_1.text)("meltable"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagOld: (0, pg_core_1.bigint)("flag_old", { mode: "number" }).default(0),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUserDiscard: (0, pg_core_1.bigint)("id_user_discard", { mode: "number" }),
    updatedAtDiscard: (0, pg_core_1.timestamp)("updated_at_discard", { withTimezone: true, mode: 'string' }),
});
exports.reportePoRestockBundle = (0, pg_core_1.pgTable)("reporte_po_restock_bundle", {
    asin: (0, pg_core_1.text)("asin"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    totalBox: (0, pg_core_1.numeric)("total_box"),
    price: (0, pg_core_1.numeric)("price"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    fecha: (0, pg_core_1.timestamp)("fecha", { mode: 'string' }),
    notaF1: (0, pg_core_1.varchar)("nota_f1", { length: 300 }),
    responsableF2: (0, pg_core_1.text)("responsable_f2"),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 300 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorId: (0, pg_core_1.bigint)("distributor_id", { mode: "number" }),
    available: (0, pg_core_1.text)("available"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idPricelist: (0, pg_core_1.bigint)("id_pricelist", { mode: "number" }),
    distDisponibles: (0, pg_core_1.json)("dist_disponibles"),
});
exports.test = (0, pg_core_1.pgTable)("test", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    count: (0, pg_core_1.bigint)("count", { mode: "number" }),
});
exports.restockHistoric = (0, pg_core_1.pgTable)("restock_historic", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    productId: (0, pg_core_1.bigint)("product_id", { mode: "number" }),
    asi: (0, pg_core_1.text)("asi"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    brand: (0, pg_core_1.text)("brand"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCompany: (0, pg_core_1.bigint)("id_company", { mode: "number" }),
    companyName: (0, pg_core_1.text)("company_name"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idDistributor: (0, pg_core_1.bigint)("id_distributor", { mode: "number" }),
    distributorName: (0, pg_core_1.text)("distributor_name"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorPrice: (0, pg_core_1.bigint)("distributor_price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    leadTime: (0, pg_core_1.bigint)("lead_time", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idUser: (0, pg_core_1.bigint)("id_user", { mode: "number" }),
    responsableF1: (0, pg_core_1.text)("responsable_f1"),
    notaF1Restock: (0, pg_core_1.text)("nota_f1_restock"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusAsinRestock: (0, pg_core_1.bigint)("id_status_asin_restock", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idStatusProduct: (0, pg_core_1.bigint)("id_status_product", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    salesAmz: (0, pg_core_1.bigint)("sales_amz", { mode: "number" }),
    unitsWh: (0, pg_core_1.text)("units_wh").default(0),
    sales: (0, pg_core_1.numeric)("sales", { precision: 10, scale: 2 }).default('0'),
    salesToRestock: (0, pg_core_1.numeric)("sales_to_restock", { precision: 10, scale: 2 }).default('0'),
    dosl: (0, pg_core_1.numeric)("dosl", { precision: 10, scale: 2 }).default('0'),
    salesVelocity: (0, pg_core_1.numeric)("sales_velocity", { precision: 10, scale: 2 }).default('0'),
    netProfitTotalUpc: (0, pg_core_1.numeric)("net_profit_total_upc", { precision: 10, scale: 2 }).default('0'),
    netProfitTotalAsin: (0, pg_core_1.numeric)("net_profit_total_asin", { precision: 10, scale: 2 }).default('0'),
    netProfitUpc: (0, pg_core_1.numeric)("net_profit_upc", { precision: 10, scale: 2 }).default('0'),
    netProfitAsin: (0, pg_core_1.numeric)("net_profit_asin", { precision: 10, scale: 2 }).default('0'),
    salesVelocity3: (0, pg_core_1.numeric)("sales_velocity_3", { precision: 10, scale: 2 }).default('0'),
    salesVelocity7: (0, pg_core_1.numeric)("sales_velocity_7", { precision: 10, scale: 2 }).default('0'),
    salesVelocity15: (0, pg_core_1.numeric)("sales_velocity_15", { precision: 10, scale: 2 }).default('0'),
    lastFtl: (0, pg_core_1.text)("last_ftl"),
    totalPack: (0, pg_core_1.text)("total_pack"),
    fechaSalidaFtl: (0, pg_core_1.text)("fecha_salida_ftl"),
    netYesterday: (0, pg_core_1.numeric)("net_yesterday", { precision: 10, scale: 2 }).default('0'),
    netToday: (0, pg_core_1.numeric)("net_today", { precision: 10, scale: 2 }).default('0'),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    daysSales: (0, pg_core_1.bigint)("days_sales", { mode: "number" }).default(0),
    snapNote: (0, pg_core_1.text)("snap_note"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    snapBuyboxShare: (0, pg_core_1.bigint)("snap_buybox_share", { mode: "number" }).default(0),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idCuadro: (0, pg_core_1.bigint)("id_cuadro", { mode: "number" }),
});
exports.diarioDescartadoPersonaBuyers = (0, pg_core_1.pgTable)("Diario_Descartado_Persona_Buyers", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidad: (0, pg_core_1.bigint)("cantidad", { mode: "number" }),
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    phase2Notes: (0, pg_core_1.text)("phase_2_notes"),
    typeProduct: (0, pg_core_1.text)("type_product"),
});
exports.holdConfirmed = (0, pg_core_1.pgTable)("hold_confirmed", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    confirmedPo: (0, pg_core_1.text)("confirmed_po"),
    distributor: (0, pg_core_1.text)("distributor"),
    dateOfConfirmation: (0, pg_core_1.timestamp)("date_of_confirmation", { withTimezone: true, mode: 'string' }),
    status: (0, pg_core_1.text)("status"),
});
exports.restockStatusEmpresa = (0, pg_core_1.pgTable)("Restock_status_empresa", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotasGb: (0, pg_core_1.bigint)("cantidad_notas_gb", { mode: "number" }),
    notasGb: (0, pg_core_1.varchar)("notas_gb"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadStatusGb: (0, pg_core_1.bigint)("cantidad_status_gb", { mode: "number" }),
    statusGb: (0, pg_core_1.varchar)("status_gb"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotConfirmedGb: (0, pg_core_1.bigint)("cantidad_not_confirmed_gb", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotasShipplier: (0, pg_core_1.bigint)("cantidad_notas_shipplier", { mode: "number" }),
    notasShipplier: (0, pg_core_1.varchar)("notas_shipplier"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadStatusShipplier: (0, pg_core_1.bigint)("cantidad_status_shipplier", { mode: "number" }),
    statusShipplier: (0, pg_core_1.varchar)("status_shipplier"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotConfirmedShipplier: (0, pg_core_1.bigint)("cantidad_not_confirmed_shipplier", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotasNitan: (0, pg_core_1.bigint)("cantidad_notas_nitan", { mode: "number" }),
    notasNitan: (0, pg_core_1.varchar)("notas_nitan"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadStatusNitan: (0, pg_core_1.bigint)("cantidad_status_nitan", { mode: "number" }),
    statusNitan: (0, pg_core_1.varchar)("status_nitan"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotConfirmedNitan: (0, pg_core_1.bigint)("cantidad_not_confirmed_nitan", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotasJmp: (0, pg_core_1.bigint)("cantidad_notas_jmp", { mode: "number" }),
    notasJmp: (0, pg_core_1.varchar)("notas_jmp"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadStatusJmp: (0, pg_core_1.bigint)("cantidad_status_jmp", { mode: "number" }),
    statusJmp: (0, pg_core_1.varchar)("status_jmp"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    cantidadNotConfirmedJmp: (0, pg_core_1.bigint)("cantidad_not_confirmed_jmp", { mode: "number" }),
});
exports.restockCantidadTotalcostDiario = (0, pg_core_1.pgTable)("Restock_cantidad_totalcost_diario", {
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    inicio: (0, pg_core_1.timestamp)("inicio", { mode: 'string' }),
    fin: (0, pg_core_1.timestamp)("fin", { mode: 'string' }),
    cantidad: (0, pg_core_1.doublePrecision)("cantidad"),
    cantidadHold: (0, pg_core_1.doublePrecision)("cantidad_hold"),
    cantidadToSend: (0, pg_core_1.doublePrecision)("cantidad_to_send"),
    cantidadLookingFoward: (0, pg_core_1.doublePrecision)("cantidad_looking_foward"),
    horasTrabajadas: (0, pg_core_1.interval)("horas_trabajadas"),
    asinPerHr: (0, pg_core_1.numeric)("asin_per_hr"),
    minutos: (0, pg_core_1.interval)("minutos"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
});
exports.d = (0, pg_core_1.pgTable)("d", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    currentPrice: (0, pg_core_1.bigint)("current_price", { mode: "number" }),
    category: (0, pg_core_1.varchar)("category", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    fbaFees: (0, pg_core_1.bigint)("fba_fees", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    productSize: (0, pg_core_1.varchar)("product_size", { length: 100 }),
    height: (0, pg_core_1.numeric)("height"),
    width: (0, pg_core_1.numeric)("width"),
    length: (0, pg_core_1.numeric)("length"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weight: (0, pg_core_1.bigint)("weight", { mode: "number" }),
    asin: (0, pg_core_1.varchar)("asin", { length: 10 }),
    id: (0, pg_core_1.integer)("id"),
    flagVariation: (0, pg_core_1.integer)("flag_variation"),
    price1: (0, pg_core_1.numeric)("price_1"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    priceUnits: (0, pg_core_1.numeric)("price_units"),
});
exports.reportePoRestockNew = (0, pg_core_1.pgTable)("reporte_po_restock_new", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    asin: (0, pg_core_1.varchar)("asin"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    totalBox: (0, pg_core_1.numeric)("total_box"),
    price: (0, pg_core_1.numeric)("price"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    name: (0, pg_core_1.varchar)("name", { length: 256 }),
    fecha: (0, pg_core_1.timestamp)("fecha", { mode: 'string' }),
    responsableF1: (0, pg_core_1.text)("responsable_f1"),
    notaF1: (0, pg_core_1.varchar)("nota_f1", { length: 300 }),
    responsableF2: (0, pg_core_1.text)("responsable_f2"),
    notaF2: (0, pg_core_1.varchar)("nota_f2", { length: 300 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    distributorId: (0, pg_core_1.bigint)("distributor_id", { mode: "number" }),
    available: (0, pg_core_1.text)("available"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }),
    distDisponibles: (0, pg_core_1.json)("dist_disponibles"),
});
exports.variacionesRestockReporte = (0, pg_core_1.pgTable)("Variaciones_Restock_Reporte", {
    name: (0, pg_core_1.varchar)("name", { length: 255 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    revisadas: (0, pg_core_1.bigint)("revisadas", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    aprobados: (0, pg_core_1.bigint)("aprobados", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    desaprobados: (0, pg_core_1.bigint)("desaprobados", { mode: "number" }),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
});
exports.weightProductCal = (0, pg_core_1.pgTable)("weight_product_cal", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weightMin: (0, pg_core_1.bigint)("weight_min", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    weightMax: (0, pg_core_1.bigint)("weight_max", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    price: (0, pg_core_1.bigint)("price", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    type: (0, pg_core_1.bigint)("type", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    plus: (0, pg_core_1.bigint)("plus", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    por16: (0, pg_core_1.bigint)("por_16", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    plusCondition: (0, pg_core_1.bigint)("plus_condition", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    spcId: (0, pg_core_1.bigint)("spc_id", { mode: "number" }),
});
exports.listAsinRestockTotal = (0, pg_core_1.pgTable)("list_asin_restock_total", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }),
    netProfitTotal: (0, pg_core_1.numeric)("net_profit_total"),
});
exports.restockFilters = (0, pg_core_1.pgTable)("Restock_Filters", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbImportantTotal: (0, pg_core_1.bigint)("gb_important_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbImportantRevisado: (0, pg_core_1.bigint)("gb_important_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierImportantTotal: (0, pg_core_1.bigint)("shipplier_important_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierImportantRevisado: (0, pg_core_1.bigint)("shipplier_important_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanImportantTotal: (0, pg_core_1.bigint)("nitan_important_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanImportantRevisado: (0, pg_core_1.bigint)("nitan_important_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpImportantTotal: (0, pg_core_1.bigint)("jmp_important_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpImportantRevisado: (0, pg_core_1.bigint)("jmp_important_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbLowTotal: (0, pg_core_1.bigint)("gb_low_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbLowRevisado: (0, pg_core_1.bigint)("gb_low_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierLowTotal: (0, pg_core_1.bigint)("shipplier_low_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierLowRevisado: (0, pg_core_1.bigint)("shipplier_low_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanLowTotal: (0, pg_core_1.bigint)("nitan_low_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanLowRevisado: (0, pg_core_1.bigint)("nitan_low_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpLowTotal: (0, pg_core_1.bigint)("jmp_low_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpLowRevisado: (0, pg_core_1.bigint)("jmp_low_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbEeTotal: (0, pg_core_1.bigint)("gb_ee_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    gbEeRevisado: (0, pg_core_1.bigint)("gb_ee_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierEeTotal: (0, pg_core_1.bigint)("shipplier_ee_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    shipplierEeRevisado: (0, pg_core_1.bigint)("shipplier_ee_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanEeTotal: (0, pg_core_1.bigint)("nitan_ee_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    nitanEeRevisado: (0, pg_core_1.bigint)("nitan_ee_revisado", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpEeTotal: (0, pg_core_1.bigint)("jmp_ee_total", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    jmpEeRevisado: (0, pg_core_1.bigint)("jmp_ee_revisado", { mode: "number" }),
});
exports.categoryProductCal = (0, pg_core_1.pgTable)("category_product_cal", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalPercent1: (0, pg_core_1.bigint)("referal_percent_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    referalPercent2: (0, pg_core_1.bigint)("referal_percent_2", { mode: "number" }),
    description: (0, pg_core_1.text)("description"),
});
exports.sizeProductCal = (0, pg_core_1.pgTable)("size_product_cal", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    description1: (0, pg_core_1.varchar)("description_1", { length: 100 }),
    description2: (0, pg_core_1.varchar)("description_2", { length: 100 }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    status: (0, pg_core_1.bigint)("status", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storage1: (0, pg_core_1.bigint)("storage_1", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    storage2: (0, pg_core_1.bigint)("storage_2", { mode: "number" }),
});
exports.filesCost = (0, pg_core_1.pgTable)("files_cost", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" }).primaryKey().notNull(),
    nameFile: (0, pg_core_1.text)("name_file"),
    dateInit: (0, pg_core_1.timestamp)("date_init", { withTimezone: true, mode: 'string' }),
    dateEnd: (0, pg_core_1.timestamp)("date_end", { withTimezone: true, mode: 'string' }),
    createdAt: (0, pg_core_1.timestamp)("created_at", { withTimezone: true, mode: 'string' }),
    updatedAt: (0, pg_core_1.timestamp)("updated_at", { withTimezone: true, mode: 'string' }),
});
exports.po = (0, pg_core_1.pgTable)("po", {
    id: (0, pg_core_1.bigserial)("id", { mode: "bigint" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idRestock: (0, pg_core_1.bigint)("id_restock", { mode: "number" }),
    asin: (0, pg_core_1.text)("asin"),
    itemNumber: (0, pg_core_1.text)("item_number"),
    description: (0, pg_core_1.text)("description"),
    upc: (0, pg_core_1.text)("upc"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    units: (0, pg_core_1.bigint)("units", { mode: "number" }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    box: (0, pg_core_1.bigint)("box", { mode: "number" }),
    totalBox: (0, pg_core_1.numeric)("total_box"),
    price: (0, pg_core_1.numeric)("price"),
    totalCost: (0, pg_core_1.numeric)("total_cost"),
    name: (0, pg_core_1.text)("name"),
    fecha: (0, pg_core_1.timestamp)("fecha", { withTimezone: true, mode: 'string' }),
    responsableF1: (0, pg_core_1.text)("responsable_f1"),
    notaF1: (0, pg_core_1.text)("nota_f1"),
    responsableF2: (0, pg_core_1.text)("responsable_f2"),
    notaF2: (0, pg_core_1.text)("nota_f2"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    packQty: (0, pg_core_1.bigint)("pack_qty", { mode: "number" }),
    available: (0, pg_core_1.text)("available"),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    flagVariation: (0, pg_core_1.bigint)("flag_variation", { mode: "number" }),
    distDisponibles: (0, pg_core_1.json)("dist_disponibles"),
});
