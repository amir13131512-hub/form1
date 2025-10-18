    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // جلوگیری از ارسال فرم

      const fields = ["fullname", "username", "phone", "field", "birthdate", "password"];
      let hasError = false;

      fields.forEach(id => {
        const input = document.getElementById(id);
        if (input.value.trim() === "") {
          input.classList.add("error");
          hasError = true;
        } else {
          input.classList.remove("error");
        }
      });

      if (hasError) {
        alert("لطفاً همه فیلدها را پر کنید.");
      } else {
        alert("فرم با موفقیت ارسال شد!");
        // اینجا می‌تونی فرم رو ارسال کنی یا به صفحه دیگه بری
      }
    });

