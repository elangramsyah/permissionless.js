try {
    // Contoh kode yang dapat menyebabkan error
    const result = someUndefinedFunction();
    console.log(result);
  } catch (error) {
    // getn error log
    console.error("something happen:");
    console.error(error.message);
    console.error(error.stack); // details logs
  }