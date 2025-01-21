const express                = require('express');
const bodyParser             = require('body-parser');
const path                   = require('path');
const appRoutes              = require('./routes/app-routes');
const customerRoutes         = require('./routes/customer-routes');
const supportCallRoutes      = require('./routes/support-call-routes');
const recentPurchaseRoutes   = require('./routes/recent-purchase-routes');
const marketingContactRoutes = require('./routes/marketing-contacts-routes');

const app                    = express();
const appRouter              = express.Router();
const customerRouter         = express.Router();
const supportCallRouter      = express.Router();
const recentPurchaseRouter   = express.Router();
const marketingContactRouter = express.Router();

app.use(express.static(path.join(__dirname, 'public', 'dist')));

app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', 3000);

app.use('/', appRouter);
appRouter.route('/').get(appRoutes.index);
appRouter.route('/v1/graphs/sparql').get(appRoutes.sparql);

app.use('/factsheet', customerRouter);
customerRouter.route('/all').get(customerRoutes.listAllCompanies);
customerRouter.route('/:customerName').get(customerRoutes.getCompanyInfo);

app.use('/supportcall', supportCallRouter);
supportCallRouter.route('/:customerName').get(supportCallRoutes.supportCalls);
supportCallRouter.route('/:customerName').post(supportCallRoutes.supportCallsSearch);

app.use('/recentpurchase', recentPurchaseRouter);
recentPurchaseRouter.route('/:customerName').get(recentPurchaseRoutes.recentPurchases);
recentPurchaseRouter.route('/:customerName').post(recentPurchaseRoutes.recentPurchasesSearch);

app.use('/marketingcontact', marketingContactRouter);
marketingContactRouter.route('/:customerName').get(marketingContactRoutes.marketingContacts);

app.listen(app.get('port'), () => console.info(`Magic happens on port ${app.get('port')}`));
