        // untuk nama pada welcome section
        window.onload = function() {
            const userName = prompt("Masukkan nama Anda:");
            if (userName && userName.trim()) {
                document.getElementById('welcomeText').textContent = `Hi ${userName.trim()}, Welcome To Website`;
            }
        };

        // Form validasi
        document.getElementById('messageForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const nama = document.getElementById('nama');
            const tanggalLahir = document.getElementById('tanggalLahir');
            const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
            const pesan = document.getElementById('pesan');
            
            console.log('Form submitted!');
            console.log('Nama:', nama.value);
            console.log('Tanggal:', tanggalLahir.value);
            console.log('Gender:', jenisKelamin);
            console.log('Pesan:', pesan.value);
            
            // Reset Error
            clearErrors();
            
            let hasErrors = false;
            
            // validasi nama
            if (!nama.value.trim()) {
                showError('nama', 'namaError');
                hasErrors = true;
                console.log('Error: Nama kosong');
            }
            
            // Validasi tanggal lahir
            if (!tanggalLahir.value) {
                showError('tanggalLahir', 'tanggalError');
                hasErrors = true;
                console.log('Error: Tanggal kosong');
            }
            
            // Validasi jenis kelamin
            if (!jenisKelamin) {
                showError('jenisKelamin', 'genderError');
                hasErrors = true;
                console.log('Error: Gender tidak dipilih');
            }
            
            // Validasi pesan
            if (!pesan.value.trim()) {
                showError('pesan', 'pesanError');
                hasErrors = true;
                console.log('Error: Pesan kosong');
            }
            
            console.log('Has errors:', hasErrors);
            
            // kalo tidak ada error
            if (!hasErrors) {
                console.log('Updating info panel...');
                updateInfoPanel(nama.value.trim(), tanggalLahir.value, jenisKelamin.value, pesan.value.trim());
                alert('Pesan berhasil dikirim!');
                
                // Reset form 
                document.getElementById('messageForm').reset();
            }
        });
        
        function showError(fieldId, errorId) {
            const field = document.getElementById(fieldId);
            const error = document.getElementById(errorId);
            
            if (field) {
                field.closest('.form-group').classList.add('error');
            }
            if (error) {
                error.style.display = 'block';
            }
        }
        
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            const formGroups = document.querySelectorAll('.form-group');
            
            errorElements.forEach(error => error.style.display = 'none');
            formGroups.forEach(group => group.classList.remove('error'));
        }
        
        function updateInfoPanel(nama, tanggal, gender, pesan) {
            const currentTime = new Date().toLocaleString('id-ID');
            const infoContent = document.getElementById('infoContent');
            
            infoContent.innerHTML = `
                <strong>Current time:</strong> ${currentTime}<br><br>
                <strong>Nama:</strong> ${nama}<br>
                <strong>Tanggal Lahir:</strong> ${tanggal}<br>
                <strong>Jenis Kelamin:</strong> ${gender}<br>
                <strong>Pesan:</strong> ${pesan}
            `;
        }
        
        // Real-time validation feedback
        document.getElementById('nama').addEventListener('input', function() {
            if (this.value.trim()) {
                this.closest('.form-group').classList.remove('error');
                document.getElementById('namaError').style.display = 'none';
            }
        });
        
        document.getElementById('tanggalLahir').addEventListener('change', function() {
            if (this.value) {
                this.closest('.form-group').classList.remove('error');
                document.getElementById('tanggalError').style.display = 'none';
            }
        });
        
        document.querySelectorAll('input[name="jenisKelamin"]').forEach(radio => {
            radio.addEventListener('change', function() {
                document.getElementById('genderError').style.display = 'none';
                this.closest('.form-group').classList.remove('error');
            });
        });
        
        document.getElementById('pesan').addEventListener('input', function() {
            if (this.value.trim()) {
                this.closest('.form-group').classList.remove('error');
                document.getElementById('pesanError').style.display = 'none';
            }
        });