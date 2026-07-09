import { Resend } from 'resend';

export interface EmailOrderDetails {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: {
    country: string;
    state: string;
    city: string;
    streetAddress: string;
    apartment?: string;
    postalCode: string;
  };
  products: Array<{
    name: string;
    variant: string;
    price: number;
    qty: number;
  }>;
  shippingMethod: string;
  shippingCost: number;
  paymentMethod: string;
  orderTotal: number;
}

export async function sendOrderEmails(details: EmailOrderDetails): Promise<{ customerSent: boolean; adminSent: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Buy Retatrutide <orders@buyretat.com>';
  const adminEmail = process.env.ADMIN_EMAIL || 'sales@buyretat.com';

  const result = { customerSent: false, adminSent: false };

  if (!apiKey || apiKey.includes('MY_RESEND_API_KEY') || apiKey === 're_123456789') {
    console.warn(`[Resend Email] Skipping email dispatch because RESEND_API_KEY is not configured.`);
    console.info(`[Resend Email] Customer notification payload:`, {
      to: details.customerEmail,
      orderNumber: details.orderNumber,
      orderTotal: details.orderTotal
    });
    console.info(`[Resend Email] Admin notification payload:`, {
      to: adminEmail,
      orderNumber: details.orderNumber,
    });
    return result;
  }

  const resend = new Resend(apiKey);

  // Formulate products HTML list
  const productsHtml = details.products
    .map(
      (item) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
        <div style="font-weight: 600; color: #0F172A;">${item.name}</div>
        <div style="font-size: 12px; color: #64748B;">Variant: ${item.variant}</div>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; text-align: center; color: #0F172A;">
        x${item.qty}
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #E2E8F0; text-align: right; font-weight: 600; color: #0F172A;">
        £${(item.price * item.qty).toFixed(2)}
      </td>
    </tr>
  `
    )
    .join('');

  // 1. Send Customer Email
  try {
    const customerHtmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF;">
        <div style="text-align: center; margin-bottom: 24px; padding-bottom: 24px; border-b: 2px solid #F1F5F9;">
          <h1 style="color: #0F172A; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.05em; text-transform: uppercase;">BUY RETATRUTIDE</h1>
          <p style="color: #2563EB; font-size: 11px; font-weight: bold; font-family: monospace; letter-spacing: 0.1em; margin: 4px 0 0 0; text-transform: uppercase;">UK & US Research Depot</p>
        </div>
        
        <h2 style="color: #0F172A; font-size: 20px; font-weight: 700; margin-top: 0;">Thank you for your order!</h2>
        <p style="color: #475569; font-size: 14px; line-height: 1.6;">
          Hello <strong>${details.customerName}</strong>,<br/>
          We have successfully received your research order. Our laboratory and warehouse team will review your order details and dispatch availability shortly.
        </p>

        <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <div style="font-size: 12px; font-family: monospace; color: #64748B; text-transform: uppercase; margin-bottom: 4px;">Order Number</div>
          <div style="font-size: 18px; font-weight: bold; color: #0F172A;">${details.orderNumber}</div>
        </div>

        <h3 style="color: #0F172A; font-size: 16px; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid #0F172A; padding-bottom: 6px;">Order Summary</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <thead>
            <tr>
              <th style="text-align: left; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; color: #64748B;">Product</th>
              <th style="text-align: center; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; color: #64748B; width: 60px;">Qty</th>
              <th style="text-align: right; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; color: #64748B; width: 100px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productsHtml}
          </tbody>
        </table>

        <div style="margin-left: auto; max-width: 280px; font-size: 14px; color: #475569;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Shipping Cost (${details.shippingMethod}):</span>
            <span style="font-weight: 600; color: #0F172A;">£${details.shippingCost.toFixed(2)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 1px solid #E2E8F0; font-size: 16px; font-weight: bold; color: #0F172A;">
            <span>Grand Total:</span>
            <span style="color: #FF6B1A;">£${details.orderTotal.toFixed(2)}</span>
          </div>
        </div>

        <div style="margin-top: 32px; padding: 16px; border-left: 4px solid #FF6B1A; bg-color: #FFF7ED; background-color: #FFF7ED; border-radius: 4px;">
          <h4 style="margin: 0 0 6px 0; color: #9A3412; font-size: 14px; font-weight: 700;">⚠️ Important Payment Notice</h4>
          <p style="margin: 0; color: #C2410C; font-size: 13px; line-height: 1.5; font-weight: 500;">
            Payment instructions will be sent separately after your order has been reviewed. Please do not send any payment until you receive those instructions.
          </p>
        </div>

        <div style="margin-top: 24px; padding: 12px; background-color: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 6px; font-size: 13px; color: #1E40AF; line-height: 1.5;">
          <strong>Preferred Payment Selection:</strong> ${details.paymentMethod}
        </div>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #E2E8F0; text-align: center; font-size: 12px; color: #94A3B8;">
          <p style="margin: 0 0 4px 0;">This is an automated order confirmation receipt.</p>
          <p style="margin: 0;">For any urgent lab/bulk inquiries, reply to this email or contact your assigned account representative.</p>
        </div>
      </div>
    `;

    const response = await resend.emails.send({
      from: fromEmail,
      to: details.customerEmail,
      subject: `Order Confirmation #${details.orderNumber} - Buy Retatrutide`,
      html: customerHtmlContent,
    });

    if (response.error) {
      console.error('[Resend Email Error - Customer Confirmation]:', response.error);
      console.warn('[Resend Email Tip]: If you are using onboarding@resend.dev, Resend restricts delivery ONLY to your registered account email. To send to any external customer, you must verify your custom domain in the Resend dashboard and set the RESEND_FROM_EMAIL variable.');
    } else {
      console.log('[Resend Email Success - Customer Confirmation]:', response.data);
      result.customerSent = true;
    }
  } catch (err) {
    console.error('[Resend Email] Unexpected error sending customer confirmation email:', err);
  }

  // 2. Send Admin Email
  try {
    const adminHtmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #0F172A; border-radius: 12px; background-color: #FFFFFF;">
        <div style="background-color: #0F172A; color: #FFFFFF; padding: 16px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.05em;">🚨 NEW CHECKOUT ORDER</h1>
          <p style="margin: 4px 0 0 0; font-family: monospace; font-size: 12px; color: #FF6B1A; font-weight: bold;">Order: ${details.orderNumber}</p>
        </div>

        <h3 style="color: #0F172A; font-size: 16px; margin-top: 0; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px;">Customer & Shipping Details</h3>
        <table style="width: 100%; font-size: 14px; margin-bottom: 24px; line-height: 1.6;">
          <tr>
            <td style="width: 130px; font-weight: bold; color: #64748B; vertical-align: top;">Name:</td>
            <td style="color: #0F172A;">${details.customerName}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #64748B; vertical-align: top;">Email:</td>
            <td style="color: #0F172A;"><a href="mailto:${details.customerEmail}" style="color: #2563EB;">${details.customerEmail}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #64748B; vertical-align: top;">Phone:</td>
            <td style="color: #0F172A;">${details.customerPhone}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #64748B; vertical-align: top;">Shipping Address:</td>
            <td style="color: #0F172A; background-color: #F8FAFC; padding: 10px; border-radius: 6px; border: 1px solid #E2E8F0;">
              ${details.shippingAddress.streetAddress}<br/>
              ${details.shippingAddress.apartment ? details.shippingAddress.apartment + '<br/>' : ''}
              ${details.shippingAddress.city}, ${details.shippingAddress.state} ${details.shippingAddress.postalCode}<br/>
              <strong>${details.shippingAddress.country}</strong>
            </td>
          </tr>
        </table>

        <h3 style="color: #0F172A; font-size: 16px; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px; margin-bottom: 12px;">Items Requested</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <thead>
            <tr>
              <th style="text-align: left; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; color: #64748B;">Product</th>
              <th style="text-align: center; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; color: #64748B; width: 60px;">Qty</th>
              <th style="text-align: right; padding-bottom: 8px; border-bottom: 2px solid #E2E8F0; color: #64748B; width: 100px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${productsHtml}
          </tbody>
        </table>

        <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <table style="width: 100%; font-size: 14px;">
            <tr>
              <td style="color: #64748B;">Shipping Method:</td>
              <td style="text-align: right; font-weight: 600; color: #0F172A;">${details.shippingMethod} (£${details.shippingCost.toFixed(2)})</td>
            </tr>
            <tr>
              <td style="color: #64748B; padding-top: 8px;">Payment Method Selected:</td>
              <td style="text-align: right; font-weight: bold; color: #2563EB; padding-top: 8px;">${details.paymentMethod}</td>
            </tr>
            <tr style="font-size: 16px; font-weight: bold;">
              <td style="color: #0F172A; padding-top: 12px; border-top: 1px solid #E2E8F0;">Total Order Value:</td>
              <td style="text-align: right; color: #FF6B1A; padding-top: 12px; border-top: 1px solid #E2E8F0;">£${details.orderTotal.toFixed(2)}</td>
            </tr>
          </table>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <p style="font-size: 14px; color: #475569; margin-bottom: 16px;">
            Please review this order in your database and coordinate sending the required <strong>${details.paymentMethod}</strong> payment credentials/instructions to <strong>${details.customerEmail}</strong>.
          </p>
        </div>
      </div>
    `;

    const adminResponse = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `🚨 New Order #${details.orderNumber} - Action Required (${details.paymentMethod})`,
      html: adminHtmlContent,
    });

    if (adminResponse.error) {
      console.error('[Resend Email Error - Admin Notification]:', adminResponse.error);
    } else {
      console.log('[Resend Email Success - Admin Notification]:', adminResponse.data);
      result.adminSent = true;
    }
  } catch (err) {
    console.error('[Resend Email] Unexpected error sending admin notification email:', err);
  }

  return result;
}
