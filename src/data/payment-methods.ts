export interface PaymentMethod {
  id: string;
  name: string;
  type: "bank_transfer" | "ewallet" | "credit_card";
  icon: string;
  instructions: string[];
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "bca",
    name: "BCA Virtual Account",
    type: "bank_transfer",
    icon: "🏦",
    instructions: [
      "Login ke BCA Mobile/KlikBCA",
      "Pilih menu Transfer > Virtual Account",
      "Masukkan nomor VA: 8801 0812 3456 7890",
      "Konfirmasi nominal dan bayar",
    ],
  },
  {
    id: "mandiri",
    name: "Mandiri Virtual Account",
    type: "bank_transfer",
    icon: "🏦",
    instructions: [
      "Login ke Livin' by Mandiri",
      "Pilih menu Bayar > Multipayment",
      "Masukkan nomor VA: 8901 0812 3456 7890",
      "Konfirmasi nominal dan bayar",
    ],
  },
  {
    id: "bni",
    name: "BNI Virtual Account",
    type: "bank_transfer",
    icon: "🏦",
    instructions: [
      "Login ke BNI Mobile Banking",
      "Pilih menu Transfer > Virtual Account",
      "Masukkan nomor VA: 8801 0812 3456 7890",
      "Konfirmasi nominal dan bayar",
    ],
  },
  {
    id: "gopay",
    name: "GoPay",
    type: "ewallet",
    icon: "💳",
    instructions: [
      "Buka aplikasi Gojek/GoPay",
      "Scan QR Code yang tampil di layar",
      "Konfirmasi pembayaran",
      "Masukkan PIN GoPay",
    ],
  },
  {
    id: "ovo",
    name: "OVO",
    type: "ewallet",
    icon: "💳",
    instructions: [
      "Buka aplikasi OVO",
      "Masuk ke menu Transfer",
      "Masukkan nomor tujuan yang tertera",
      "Konfirmasi dan masukkan Security Code",
    ],
  },
  {
    id: "dana",
    name: "DANA",
    type: "ewallet",
    icon: "💳",
    instructions: [
      "Buka aplikasi DANA",
      "Pilih menu Kirim/Bayar",
      "Scan QR Code atau masukkan nomor",
      "Konfirmasi pembayaran",
    ],
  },
];
