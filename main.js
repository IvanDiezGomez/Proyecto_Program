// ---- Navegación por pestañas superiores ----
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.content-section');

        function activateSection(id) {
            navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
            sections.forEach(s => s.classList.toggle('active-section', s.id === id));
            window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
            if (id === 'mapa' && window._mapFull) {
                setTimeout(() => window._mapFull.invalidateSize(), 50);
            }
        }

        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                activateSection(link.dataset.section);
            });
        });

        document.querySelectorAll('[data-goto]').forEach(btn => {
            btn.addEventListener('click', () => activateSection(btn.dataset.goto));
        });

        // ---- Reloj ----
        function tick() {
            const now = new Date();
            document.getElementById('clock').textContent = now.toLocaleTimeString('es-AR', { hour12: false });
        }
        tick();
        setInterval(tick, 1000);

        // ---- Estaciones (datos para el mapa) ----
        const stations = [
            { id: 'E-001', name: 'Río Salí', zone: 'San Miguel de Tucumán', level: '0.82 m', status: 'normal', lat: -26.8241, lng: -65.2226 },
            { id: 'E-004', name: 'Arroyo Nueva Esperanza', zone: 'Yerba Buena', level: '1.42 m', status: 'warning', lat: -26.8079, lng: -65.2846 },
            { id: 'E-008', name: 'Río Lules', zone: 'Lules', level: '1.78 m', status: 'risk', lat: -26.9091, lng: -65.3427 },
            { id: 'E-014', name: 'Río Marapa', zone: 'Graneros', level: '2.18 m', status: 'critical', lat: -27.3608, lng: -65.3936 },
            { id: 'E-021', name: 'Río Colorado', zone: 'Monteros', level: '1.05 m', status: 'warning', lat: -27.1667, lng: -65.5000 }
        ];

        const statusColor = {
            normal: '#217a53',
            warning: '#c98a1f',
            risk: '#c4602a',
            critical: '#b83f3f'
        };

        function buildMap(containerId) {
            const map = L.map(containerId, { scrollWheelZoom: false }).setView([-26.95, -65.35], 9);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(map);

            stations.forEach(st => {
                const marker = L.circleMarker([st.lat, st.lng], {
                    radius: 9,
                    fillColor: statusColor[st.status],
                    color: '#fff',
                    weight: 2,
                    fillOpacity: 0.95
                }).addTo(map);

                marker.bindPopup(
                    '<strong>' + st.id + '</strong> · ' + st.name + '<br>' +
                    st.zone + '<br>Nivel: ' + st.level
                );
            });

            return map;
        }

        window._mapDashboard = buildMap('map');

        // El mapa completo se crea al entrar a la sección para evitar problemas de tamaño 0px
        document.querySelector('[data-section="mapa"]').addEventListener('click', () => {
            if (!window._mapFull) {
                window._mapFull = buildMap('mapFull');
            }
        }, { once: true });