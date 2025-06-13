import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { testimonials as staticTestimonials, faqs as staticFaqs } from "@/lib/static-data"

// Enhanced testimonial type to include stars
interface Testimonial {
  name: string
  title: string
  quote: string
  stars: number
}

const testimonials: Testimonial[] = [
  {
    ...staticTestimonials[0],
    stars: 5,
  },
  {
    ...staticTestimonials[1],
    stars: 5,
  },
  {
    ...staticTestimonials[2],
    stars: 5,
  },
]

// Update the FAQ answer for the money-back guarantee
const faqs = staticFaqs.map(faq =>
  faq.question.includes("money-back guarantee")
    ? {
        ...faq,
        answer:
          "Yes, our guarantee is centered around your SQL (Sales Qualified Lead) goal. If you don't achieve a positive ROI based on the agreed SQL target within the first 6 months, you get your money back. No questions asked."
      }
    : faq
)

// Convert Google Drive link to embed format
const googleDriveVideoId = "1NqeMLSE1PwIJkc4ZRSL8I3rBB8jAsl4o"
const googleDriveEmbedUrl = `https://drive.google.com/file/d/${googleDriveVideoId}/preview`

export default function PrebookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <div className="h-20 md:h-24" aria-hidden="true"></div> {/* Spacer for header */}
      <main className="flex-grow">
        {/* Video Section */}
        <section className="py-12 md:py-20 bg-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-[#2DE6C4]">Watch This Before Our Call</h1>
            <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border border-[#2DE6C4]">
              <iframe
                src={googleDriveEmbedUrl}
                width="100%"
                height="100%"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                className="bg-slate-800"
                title="Pre-call Video"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 md:py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2DE6C4]">Client Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 text-white shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <CardTitle className="text-xl text-[#2DE6C4]">{testimonial.name}</CardTitle>
                      <div className="flex" aria-label={`${testimonial.stars} star testimonial`}>
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <span key={i} className="text-[#2DE6C4] text-lg mr-0.5" aria-hidden="true">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-400">{testimonial.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-slate-300">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-slate-900">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2DE6C4]">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-slate-700 mb-2 rounded-lg overflow-hidden bg-slate-800"
                >
                  <AccordionTrigger className="p-4 text-lg hover:no-underline text-[#2DE6C4] hover:text-[#2DE6C4]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-0 text-slate-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      {/* Growth Card Section */}
      <section className="pt-4 pb-12 md:pt-6 md:pb-20 bg-transparent">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-5xl rounded-3xl bg-[#181f3a]/90 border border-[#2DE6C4]/10 shadow-2xl p-8 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Unlock <span className="text-[#2DE6C4]">Hidden Growth</span> Today
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join over 100's of businesses that have unlocked 10X ROI with us—scaling faster and dominating their markets.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 w-full">
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold text-[#2DE6C4] mb-2">$200M</div>
                <div className="text-white/80 text-base md:text-lg">Generated for our clients</div>
              </div>
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold text-[#2DE6C4] mb-2">18,000</div>
                <div className="text-white/80 text-base md:text-lg">Leads Generated</div>
              </div>
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-bold text-[#2DE6C4] mb-2">100%</div>
                <div className="text-white/80 text-base md:text-lg">Client Success</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-[#2DE6C4] text-2xl">★★★★★</span>
                <span className="text-[#2DE6C4] font-bold text-lg">4.9</span>
                <span className="text-white/80 text-base ml-1">Clutch</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2DE6C4] text-2xl">★★★★★</span>
                <span className="text-[#2DE6C4] font-bold text-lg">4.6</span>
                <span className="text-white/80 text-base ml-1">Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer has been completely removed */}
    </div>
  )
} 