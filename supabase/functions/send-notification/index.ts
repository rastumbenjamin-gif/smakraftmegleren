import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NotificationRequest {
  type: 'seller' | 'buyer' | 'registration' | 'more_opportunities_request';
  data: any;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, data }: NotificationRequest = await req.json();

    let subject = "";
    let htmlContent = "";

    if (type === 'seller') {
      subject = `New Power Plant Sale Inquiry - ${data.kraftverkNavn || 'Unknown Plant'}`;
      htmlContent = `
        <h2>New Power Plant Sale Inquiry</h2>
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.navn}</li>
          <li><strong>Email:</strong> ${data.epost}</li>
          <li><strong>Phone:</strong> ${data.telefon}</li>
        </ul>
        
        <h3>Power Plant Details:</h3>
        <ul>
          <li><strong>Plant Name:</strong> ${data.kraftverkNavn}</li>
          <li><strong>Location:</strong> ${data.lokasjon}</li>
          <li><strong>Capacity:</strong> ${data.installertEffekt} MW</li>
          <li><strong>Annual Production:</strong> ${data.aarligProduksjon} GWh</li>
          <li><strong>Build Year:</strong> ${data.byggeaar}</li>
        </ul>

        <h3>Sales Details:</h3>
        <ul>
          <li><strong>Asking Price:</strong> €${data.pris}</li>
          <li><strong>Reason for Sale:</strong> ${data.salgsgrunn}</li>
          <li><strong>Timeline:</strong> ${data.tidslinje}</li>
        </ul>

        ${data.kommentarer ? `<h3>Additional Comments:</h3><p>${data.kommentarer}</p>` : ''}
        
        <p><strong>Consent to contact:</strong> ${data.samtykke ? 'Yes' : 'No'}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    } else if (type === 'buyer') {
      subject = `New Investment Interest - ${data.plantName}`;
      htmlContent = `
        <h2>New Investment Interest</h2>
        <h3>Investor Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Investor Type:</strong> ${data.investorType}</li>
        </ul>
        
        <h3>Investment Details:</h3>
        <ul>
          <li><strong>Plant of Interest:</strong> ${data.plantName}</li>
          <li><strong>Budget Range:</strong> ${data.budgetRange}</li>
          <li><strong>Pricing Area:</strong> ${data.pricingArea}</li>
          <li><strong>Production Range:</strong> ${data.productionRange}</li>
          <li><strong>Investment Timeframe:</strong> ${data.timeframe}</li>
        </ul>

        ${data.comments ? `<h3>Comments:</h3><p>${data.comments}</p>` : ''}
        
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    } else if (type === 'registration') {
      subject = `New Registration: ${data.plantName}`;
      htmlContent = `
        <h2>New Investment Registration</h2>
        <p><strong>Plant:</strong> ${data.plantName}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Investment Amount:</strong> ${data.investmentAmount}</p>
        <p><strong>Investment Timeframe:</strong> ${data.investmentTimeframe}</p>
        <p><strong>Experience Level:</strong> ${data.experienceLevel}</p>
        <p><strong>Additional Comments:</strong> ${data.additionalComments || 'None'}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    } else if (type === 'more_opportunities_request') {
      subject = "New Request for More Investment Opportunities";
      htmlContent = `
        <h2>More Opportunities Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Investment Amount Range:</strong> ${data.investmentAmount}</p>
        <p><strong>Investment Timeframe:</strong> ${data.investmentTimeframe}</p>
        <p><strong>Experience Level:</strong> ${data.experience}</p>
        <p><strong>Specific Interests:</strong> ${data.interests || 'None specified'}</p>
        <p><strong>Additional Information:</strong> ${data.additionalInfo || 'None'}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Småkraftmeglerne <onboarding@resend.dev>",
      to: [Deno.env.get("NOTIFY_TO_EMAIL") || "your-email@example.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);