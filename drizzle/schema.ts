import { pgTable, text, serial, integer, doublePrecision, date, varchar, foreignKey, timestamp, unique, real, boolean, numeric } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const dimenciones3 = pgTable("dimenciones3", {
	asin: text("asin"),
	height: text("height_"),
	length: text("length_"),
	width: text("width_"),
	weight: text("weight_"),
	packQuantity: text("pack_quantity_"),
	id: serial("id").primaryKey().notNull(),
});

export const upcAsing2 = pgTable("upc_asing2", {
	asin: text("asin"),
	upc: text("upc"),
	id: serial("id").primaryKey().notNull(),
});

export const statusWaiting = pgTable("status_waiting", {
	id: serial("id").primaryKey().notNull(),
	itemNumber: text("item_number"),
	productName: text("product_name"),
	upcDis: text("upc_dis"),
	units: integer("units"),
	casePricelist: integer("case_pricelist"),
	unitCost: doublePrecision("unit_cost"),
	total: doublePrecision("total"),
	productNotes: text("product_notes"),
	supplier: text("supplier"),
	purchasedCase: integer("purchased_case"),
	unitsConfirmadas: integer("units_confirmadas"),
	unitCostConfirm: doublePrecision("unit_cost_confirm"),
	status: text("Status"),
	porcentajeConfirmacion: doublePrecision("porcentaje_confirmacion"),
	fechaEmision: date("fecha_emision"),
	fechaConfirmacion: date("fecha_confirmacion"),
	ftl: integer("ftl"),
	orderType: text("order_type"),
	sku: text("sku"),
	poNumberId: text("po_number_id"),
	walmartId: text("walmart_id"),
	totalUnitCostConfir: doublePrecision("total_unit_cost_confir"),
	fechaDeSalida: date("fecha_de_salida"),
	idSW: text("id_s_w").notNull(),
	porsentaje: integer("porsentaje"),
});

export const comparacion = pgTable("comparacion", {
	id: serial("id_").primaryKey().notNull(),
	brand: varchar("brand"),
	category: varchar("category"),
	competitorPrice: varchar("competitor_price"),
	competitorShippingPrice: varchar("competitor_shipping_price"),
	competitorTotalPrice: varchar("competitor_total_price"),
	walmartItemId: varchar("walmart_item_id"),
	asin: varchar("asin"),
	buyBoxPrice: varchar("buy_box_price"),
	itemPrice: varchar("item_price"),
	shippingPrice: varchar("shipping_price"),
	walmartUrl: varchar("walmart_url"),
	amazonUrl: varchar("amazon_url"),
	gtin: varchar("gtin"),
	upc: varchar("upc"),
	isbn: varchar("isbn"),
	ean: varchar("ean"),
	potentialSales: varchar("potential_sales"),
	wfsFulfillment: varchar("wfs_fulfillment"),
	seasonality: varchar("seasonality"),
	itemName: varchar("Item Name"),
});

export const notaRestock = pgTable("nota_restock", {
	id: serial("id").primaryKey().notNull(),
	nota: text("nota"),
});

export const statusRestock = pgTable("status_restock", {
	id: serial("id").primaryKey().notNull(),
	status: text("status"),
});

export const pricelistFormateadas = pgTable("pricelist_formateadas", {
	id: serial("id").primaryKey().notNull(),
	upc: text("upc"),
	descripcion: text("descripcion"),
	unitPrice: doublePrecision("unit_price"),
	case: integer("case_"),
	itemNum: text("item_num"),
	discountPorsentaje: doublePrecision("discount_porsentaje"),
	discountPrice: doublePrecision("discount_price"),
	moq: integer("moq"),
	display: integer("display"),
	proveedores: integer("proveedores").references(() => proveedores.id),
	fechaActualizado: date("fecha_actualizado"),
	fechaCreada: date("fecha_creada"),
});

export const imagen2 = pgTable("imagen2", {
	id: serial("id").primaryKey().notNull(),
	sku: text("sku_").references(() => inventory2.sku),
	imagenUrl: text("imagen_url"),
});

export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar("id", { length: 36 }).primaryKey().notNull(),
	checksum: varchar("checksum", { length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text("logs"),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const preRestockStatusWaiting = pgTable("pre_restock_status_waiting", {
	id: serial("id").primaryKey().notNull(),
	fechaEmission: timestamp("fecha_emission", { mode: 'string' }),
	comprador: text("comprador"),
	walmartId: text("walmart_id"),
	sku: text("sku_"),
	statusProcesos: text("status_procesos"),
	notaRestock: text("nota_restock"),
	distribuidor: text("distribuidor"),
	itemNumber: text("item_number"),
	descripcion: text("descripcion"),
	upcSupplier: text("upc_supplier"),
	unitPrice: doublePrecision("unit_price"),
	unitCostTotal: doublePrecision("unit_cost_total"),
	packPrice: doublePrecision("pack_price"),
	packPriceTotal: doublePrecision("pack_price_total"),
	salesUnit: integer("sales_unit"),
	salesPack: integer("sales_pack"),
	idRestock: integer("id_restock"),
	packQuiantity: integer("pack_quiantity"),
	classificationCard: text("classification_card"),
},
(table) => {
	return {
		sku: foreignKey({
			columns: [table.sku, table.sku],
			foreignColumns: [inventory2.sku],
			name: "sku"
		}),
		preRestockStatusWaitingIdRestockKey: unique("pre_restock_status_waiting_id_restock_key").on(table.idRestock),
	}
});

export const calculadora = pgTable("calculadora", {
	id: serial("id").primaryKey().notNull(),
	walmartId: varchar("walmart_id"),
	sku: varchar("sku"),
	buyBoxReferencia: doublePrecision("buy_box_referencia"),
	fullFeedReferencial: doublePrecision("full_feed_referencial"),
	contraCategory: varchar("contra_category"),
	buyBoxApi: doublePrecision("buy_box_api"),
});

export const fTable = pgTable("F_Table", {
	id: serial("id").primaryKey().notNull(),
	fulfilmentFee: doublePrecision("fulfilment_fee"),
	sku: text("sku_").references(() => inventory2.sku),
},
(table) => {
	return {
		fTableSkuKey: unique("F_Table_sku__key").on(table.sku),
	}
});

export const compradores = pgTable("compradores", {
	id: serial("id").primaryKey().notNull(),
	nombre: varchar("nombre"),
	password: varchar("password", { length: 30 }),
	usuario: varchar("usuario", { length: 255 }),
	rolluser: varchar("rolluser").default('comprador'),
},
(table) => {
	return {
		compradoresUsuarioKey: unique("compradores_usuario_key").on(table.usuario),
	}
});

export const infoproveedor = pgTable("infoproveedor", {
	id: serial("id").primaryKey().notNull(),
	proveedor: text("proveedor"),
	streetAddress: text("street_address"),
	responsable: text("responsable"),
	city: text("city"),
	phone: text("phone"),
	mail: text("mail"),
	idproveedor: integer("idproveedor").references(() => proveedores.id),
});

export const orderSales2 = pgTable("order_sales_2", {
	id: serial("id").primaryKey().notNull(),
	fechaCreacion: date("fecha_creacion"),
	ordenSalesId: text("orden_sales_id"),
	gtim: text("gtim"),
	sku: text("sku").references(() => inventory2.sku),
	wmtId: text("wmt_id"),
	itemsName: text("items_name"),
	quantity: integer("quantity"),
	gmv: doublePrecision("gmv"),
	orderStatus: text("order_status"),
	shippedDate: date("shipped_date"),
	shippedFrom: text("shipped_from"),
	shipToCity: text("ship_to_city"),
	shipToState: text("ship_to_state"),
	shipToZip: text("ship_to_zip"),
	purchaseOrderNum: text("purchase_order_num"),
	neto: doublePrecision("neto"),
	cogs: doublePrecision("cogs"),
	fees: doublePrecision("fees"),
	fechaSql: date("fecha_sql"),
	fullFeed: doublePrecision("full_feed"),
	referalFeed: doublePrecision("referal_feed"),
});

export const productPackage = pgTable("product_package", {
	id: serial("id").primaryKey().notNull(),
	idProviderUpc: varchar("id_provider_upc", { length: 14 }).notNull().references(() => providerUpc.id),
	asin: text("asin").notNull(),
	image: text("image").notNull(),
	height: real("height").notNull(),
	length: real("length").notNull(),
	width: real("width").notNull(),
	weight: real("weight").notNull(),
	quantity: integer("quantity").notNull(),
	size: text("size"),
	timestamp: timestamp("timestamp", { mode: 'string' }).defaultNow().notNull(),
});

export const proveedores = pgTable("proveedores", {
	id: serial("id").primaryKey().notNull(),
	nombre: varchar("nombre"),
	leadtime: integer("leadtime"),
});

export const refoundReturns2 = pgTable("refound_returns_2", {
	id: serial("id").primaryKey().notNull(),
	orderId: text("order_id"),
	producName: text("produc_name"),
	returnReason: text("return_reason"),
	returnDate: date("return_date"),
	currentSatatus: text("current_satatus"),
	unit: integer("unit"),
	po: text("po"),
	poLine: integer("po_line"),
	rma: text("rma"),
	returnOrdenLine: integer("return_orden_line"),
	fault: text("fault"),
	deliveredDate: date("delivered_date"),
	receivedScanDate: date("received_scan_date"),
	disposition: text("disposition"),
	itemCondition: text("item_condition"),
	upc: text("upc_"),
	currentTrackingStatus: text("current_tracking_status"),
	shipping: doublePrecision("Shipping"),
});

export const wallysmarter = pgTable("wallysmarter", {
	id: serial("id").primaryKey().notNull(),
	walmarid: varchar("walmarid"),
	buyboxCurrent: doublePrecision("buybox_current"),
	fullFelmandFeed: doublePrecision("full_felmand_feed"),
	brand: varchar("brand"),
	supplierSku: varchar("supplier_sku"),
	category: varchar("category"),
	height: doublePrecision("height"),
	length: doublePrecision("length_"),
	width: doublePrecision("width"),
	weight: doublePrecision("weight"),
	packQuantity: integer("pack_quantity"),
	type: varchar("type_"),
	sales: integer("sales"),
	aproveTeam: varchar("aprove_team"),
	createdAt: date("created_at"),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	notaTeam: text("nota_team"),
	partPrice: doublePrecision("part_price"),
	wmOutOfStock90: boolean("wm_out_of_stock_90"),
	variation: boolean("variation"),
	margin: doublePrecision("margin"),
	idDistributor: integer("id_distributor").notNull(),
	meltable: boolean("meltable"),
	lastDateUpdate: date("last_date_update"),
	flagOl: boolean("flag_ol"),
	upc: numeric("upc", { precision: 15, scale:  0 }),
});

export const walmartDepartments = pgTable("walmart_departments", {
	id: integer("id").primaryKey().notNull(),
	department: text("department").notNull(),
	superDepartmentNumber: integer("super_department_number").notNull(),
	superDepartmentName: text("super_department_name").notNull(),
	superDepartmentsId: integer("super_departments_id").notNull(),
	updateAt: timestamp("update_at", { mode: 'string' }).defaultNow(),
});

export const comprasSW = pgTable("compras_s_w", {
	id: serial("id").primaryKey().notNull(),
	itemNumber: text("item_number"),
	productName: text("product_name"),
	upc: text("upc"),
	units: integer("units"),
	cases: integer("cases"),
	unitCost: doublePrecision("unit_cost"),
	total: doublePrecision("total"),
	idCount: integer("id_count"),
	discount: doublePrecision("discount"),
	productNotes: text("product_notes"),
	clickCheckProduct: boolean("click_check_product"),
	supplier: text("supplier"),
	orderType: text("order_type"),
	orderId: text("order_id"),
	unitsXCase: integer("units_x_case"),
	totalCostConfirmed: doublePrecision("total_cost_confirmed"),
	unitsConfirmadas: integer("units_confirmadas"),
	cambiosPrecio: doublePrecision("cambios_precio"),
	otraInfo: text("otra_info"),
	porcentajeConfirmacion: doublePrecision("porcentaje_confirmacion"),
	fechaEnvio: date("fecha_envio"),
	fechaConfirmacion: date("fecha_confirmacion"),
	ftl: integer("ftl"),
});

export const walmartId = pgTable("walmart_id", {
	id: serial("id").primaryKey().notNull(),
	itemId: text("item_id").notNull(),
	providerUpc: varchar("provider_upc", { length: 14 }).references(() => providerUpc.id),
	timestamp: timestamp("timestamp", { mode: 'string' }).defaultNow(),
});

export const auth = pgTable("auth", {
	id: serial("id").primaryKey().notNull(),
	usuario: integer("usuario").notNull().references(() => compradores.id),
	token: varchar("token_"),
	fechaDeCreacion: timestamp("fecha_de_creacion", { mode: 'string' }),
	available: boolean("available"),
});

export const providerUpc = pgTable("provider_upc", {
	id: varchar("id", { length: 14 }).primaryKey().notNull(),
	ean: varchar("ean", { length: 14 }),
	upc: varchar("upc", { length: 14 }),
	product: text("product"),
	brand: text("brand"),
	category: text("category"),
	image: text("image"),
	statusCode: integer("status_code"),
	timestamp: timestamp("timestamp", { mode: 'string' }).defaultNow(),
	gtin: varchar("gtin", { length: 14 }),
});

export const walmartTopProducts = pgTable("walmart_top_products", {
	id: integer("id").primaryKey().notNull(),
	departmentId: integer("department_id").notNull().references(() => walmartDepartments.id),
	categoryName: text("category_name").notNull(),
	subCategoryName: text("sub_category_name").notNull(),
	productName: text("product_name").notNull(),
	isTwoDayEligible: integer("is_two_day_eligible").notNull(),
	totalOffers: integer("total_offers").notNull(),
	isbn: text("isbn").notNull(),
	issn: text("issn").notNull(),
	existsForSeller: integer("exists_for_seller").notNull(),
	rank: integer("rank").notNull(),
	brand: text("brand").notNull(),
	updateAt: timestamp("update_at", { mode: 'string' }).defaultNow(),
});

export const variaciones = pgTable("variaciones", {
	id: serial("id").primaryKey().notNull(),
	enInventario: text("en_inventario"),
	variacion: text("variacion"),
	variacionEnInventario: boolean("variacion_en_inventario"),
	upc: varchar("upc"),
});

export const inventory2 = pgTable("inventory2", {
	status: text("status"),
	upcSupplier: text("upc_supplier"),
	gtin: text("gtin"),
	sku: text("sku").primaryKey().notNull(),
	description: text("description"),
	itemId: text("item_id"),
	pack: integer("pack"),
	itemNumberSupplier: text("item_number_supplier"),
	cogs: doublePrecision("cogs"),
	cogsInPack: doublePrecision("cogs_in_pack"),
	outboundShippingWeight: doublePrecision("outbound_shipping_weight"),
	weightLb: doublePrecision("weight_lb"),
	unitsConfirm: doublePrecision("units_confirm"),
	unitsInWh: doublePrecision("units_in_wh"),
	unitsInTransit: doublePrecision("units_in_transit"),
	unitsToCharge: doublePrecision("units_to_charge"),
	unitsInWm: doublePrecision("units_in_wm"),
	packsInWm: doublePrecision("packs_in_wm"),
	unitsReturned: doublePrecision("units_returned"),
	unitsDamaged: doublePrecision("units_damaged"),
	link: text("link_"),
	linkAmazon: text("link_amazon"),
	categoria: text("categoria"),
	lengthIn: doublePrecision("length_in"),
	widthIn: doublePrecision("width_in"),
	heightIn: doublePrecision("height_in"),
	totalCostFees: doublePrecision("total_cost_fees"),
	estCommission: doublePrecision("est_commission"),
	cogsFee: doublePrecision("cogs_fee"),
	hazmat: text("hazmat"),
	ohXProduct: doublePrecision("oh_x_product"),
	brand: text("brand"),
	packToCharge: doublePrecision("pack_to_charge"),
	packInTransit: doublePrecision("pack_in_transit"),
	packInWh: doublePrecision("pack_in_wh"),
	packsConfirm: doublePrecision("packs_confirm"),
	stockValuesWm: doublePrecision("stock_values_wm"),
	stockValuesWh: doublePrecision("stock_values_wh"),
	lastFtl: integer("last_ftl"),
	packsAvailableToSell: integer("packs_available_to_sell"),
	packInReservation: integer("pack_in_reservation"),
	buybox: doublePrecision("buybox"),
	vendedorCurrent: text("vendedor_current"),
	fechaScrap: timestamp("fecha_scrap", { withTimezone: true, mode: 'string' }),
});

export const relacionPricelistVsproviderUpc = pgTable("relacion_pricelistVSproviderUpc", {
	id: serial("id").primaryKey().notNull(),
	idPricelist: integer("id_pricelist").references(() => pricelistFormateadas.id),
	idProvedores: varchar("id_provedores").references(() => providerUpc.id),
});

export const restock = pgTable("restock", {
	id: serial("id").primaryKey().notNull(),
	inventoryId: text("inventory_id").references(() => inventory2.sku).references(() => inventory2.sku),
	clasificacion: text("clasificacion"),
	dosl: doublePrecision("dosl"),
	velocitysales: doublePrecision("velocitysales"),
	margin: doublePrecision("margin"),
	asignado: integer("asignado").references(() => compradores.id),
});

export const notasManualRestock = pgTable("notas_manual_restock", {
	id: serial("id").primaryKey().notNull(),
	sku: text("sku"),
	nota: text("nota"),
	fecha: timestamp("fecha", { mode: 'string' }),
	idComprador: integer("id_comprador").references(() => compradores.id),
	nombreCompradores: text("nombre_compradores"),
},
(table) => {
	return {
		sku: foreignKey({
			columns: [table.sku, table.sku],
			foreignColumns: [inventory2.sku],
			name: "sku"
		}),
	}
});