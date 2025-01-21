'use strict';

const op = require('/MarkLogic/optic');
 
op
  .fromView('customer360', 'purchases')
  .where(op.eq(op.col('company'), customer))
  .joinDoc('doc', op.col('uri'))
  .select(['order_date', 'order_id', 'product', 'price', 'quantity', op.as('total', op.multiply(op.col('price'), op.col('quantity'))), 'doc'])
  .orderBy([op.desc('order_date'), 'product'])
  .limit(10)
  .result();