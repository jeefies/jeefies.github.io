#include <bits/stdc++.h>

using namespace std;
const int N = 2e5 + 7, mod = 998244353;

int a[N], co[N], f[N], tmp[N];

void mulco(int n, int k) {
	copy_n(co, n + 1, tmp + 1);
	for (int i = 0; i <= n; ++i)
		(tmp[i] += mod - 1ll * k * co[i] % mod) %= mod;
	copy_n(tmp, n + 1, co);
}

int main() {
	int n; cin >> n;
	for (int i = 0; i < n; ++i) cin >> a[i];
	
	co[0] = 1;
	for (int i = 0; i < n; ++i, mulco(i, i - 1)) {
		for (int j = 0; j <= i; ++j)
			(f[j] += 1ll * a[i] * co[j] % mod) %= mod;
	}
	
	for (int i = 0; i < n; ++i) {
		cout << f[i] << " \n"[i + 1 == n];
	}
} 
