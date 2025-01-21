'use strict';

const op = require('/MarkLogic/optic');

op
  .fromView('customer360', 'purchases')
  .where(
    op.and(
      op.eq(op.col('company'), customer),
      op.ge(op.col('order_date'), xs.date(from)),
      op.le(op.col('order_date'), xs.date(to))
    )
  )
  .joinDoc('doc', op.col('uri'))
  .select(['order_date', 'order_id', 'product', 'price', 'quantity', op.as('total', op.multiply(op.col('price'), op.col('quantity'))), 'doc'])
  .orderBy([op.desc('order_date'), 'product'])
  .limit(10)
  .result();
