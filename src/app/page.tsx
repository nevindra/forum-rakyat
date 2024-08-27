import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription
} from "@/ui/card";

export default function Home() {
  const menu = [
    {
      title: "Cek Kasus",
      description:
        "Cari kasus yang terdaftar di website kasus masyarakat sipil",
    },
    {
      title: "Laporkan Kasus",
      description:
        "Laporkan kasus yang terdaftar di website kasus masyarakat sipil",
    },
  ];
  return (
    <main className="max-w-[70%] mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold text-center">
          Suara <span className="text-[#FF0000]">Rakyat</span>, Perubahan{" "}
          <span className="text-[#FF0000]">Bangsa</span>
        </h1>
        <h2 className="text-2xl font-normal text-center">
          Jadilah bagian dari <span className="text-[#FF0000]">perubahan</span>,
          laporkan sekarang!
        </h2>
      </div>
      {/* Menu Section */}
      <div className="flex flex-col items-center justify-center my-3">
        <h1 className="font-bold text-2xl sm:text-3xl ">Cek Fitur</h1>
        <div className="flex flex-wrap justify-center gap-4 my-3">
          {menu.map((item, index) => (
            <Card
              key={item.title}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <CardContent className="text-center font-bold flex items-center justify-center">
                {item.title}
              </CardContent>
              <CardDescription className="text-center font-medium text-black h-16 flex items-center justify-center">
                {item.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
      {/* Kasus Terupdate Section */}
      <div className="my-4">
        <h1 className="text-3xl font-bold mb-6 border-l-4 border-red-600 pl-4">
          Kasus Terupdate
        </h1>
        <div className="space-y-4">
          <Card>
            <CardContent className="flex items-center space-x-4 p-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Ocean Pollution Impact Assessment
                </h2>
                <p className="text-muted-foreground">
                  Global Marine Conservation Institute
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center space-x-4 p-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Renewable Energy Growth Projections
                </h2>
                <p className="text-muted-foreground">
                  International Energy Agency
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center space-x-4 p-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Global Deforestation Rates Analysis
                </h2>
                <p className="text-muted-foreground">World Wildlife Fund</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-auto">
        <h1 className="font-bold text-2xl sm:text-3xl text-center">
          Daftar Pertanyaan
        </h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-center">
              Apakah data saya terjamin aman?
            </AccordionTrigger>
            <AccordionContent>
              Kami akan terus menjaga data kasus masyarakat sipil dengan baik
              dan maksimal. Adapun kode untuk aplikasi ini bersifat open-source
              sehingga bisa diaudit secara online.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
